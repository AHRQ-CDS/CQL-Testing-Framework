// This script is used to generate documentation from the FHIR config files

const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const load = require('./fhir/load');

generateDoc('dstu2');
generateDoc('stu3');

function generateDoc(version) {
  const fhir = load(version);
  const config = fhir.config;
  let text =
`
# FHIR ${version.toUpperCase()} Resources

The CQL Testing framework supports all FHIR ${version.toUpperCase()} resource types.
It provides this support by dynamically referencing the formal FHIR definitions of
each resource, ensuring that specified fields in the YAML file are valid fields for
that resource.

## Patient References, Default Values, and Aliases

The CQL Testing Framework attempts to automatically set the appropriate patient
reference on data instances (based on the resource type).  This means that the test
author does not need to manually set the patient reference unless they wish to
override the default.

In addition, the CQL Testing Framework will set default values for certain fields
when the author does not provide a value.  Determining what the default value should be
is a subjective exercise, but the CQL Testing Framework team has tried to assign default
values that makes sense in most cases.  In cases where an author does not want the
default value they can override it with another value or with \`null\` in cases where
they want no value at all.

Last, in a few cases, the CQL Testing Framework allows test authors to use an alias
field name.  This is mainly useful for simplifying the data (e.g., allowing for \`code\`
rather than \`medicationCodeableConcept\`).

This documentation clearly indicates what the default patient reference field is,
what fields will be set with default values, and what aliases are allowed.

<a name="common"></a>
## Common Resources Types

The following list contains commonly used resource types for testing CQL-based CDS:

`;

  const resources = config.getResourceNames().sort();
  const commonResources = resources.filter(r => {
    const resourceCfg = fhir.config.findResource(r) || {};
    return resourceCfg.doc && resourceCfg.doc.status === 'common';
  });
  text += commonResources.map(r => `[${r}](#${r})`).join(' | ');
  text += '\n';

  text +=
`
## All Resource Types

The following list contains all FHIR ${version.toUpperCase()} types:

`;

  text += resources.map(r => `[${r}](#${r})`).join(' | ');
  text += '\n';

  resources.forEach(r => {
    const resourceDef = fhir.findResource(r);
    const resourceCfg = config.findResource(r) || {};
    const fhirLink = `http://hl7.org/fhir/${version.toUpperCase()}/${r.toLowerCase()}.html`;

    text +=
`
<a name="${r}"></a>
## ${r}
`;
    text += '\n';

    if (resourceDef.snapshot && resourceDef.snapshot.element && resourceDef.snapshot.element[0].definition) {
      text += resourceDef.snapshot.element[0].definition;
      text += '\n\n';
    }

    if (resourceCfg.doc && resourceCfg.doc.status === 'rare') {
      text +=
`
_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._
`;
      text += '\n';
    }

    if (resourceCfg.patient || resourceCfg.defaults || resourceCfg.aliases) {
      text +=
`
|     | Field | Description |
| --- | ----- | ----------- |
`;
    }

    if (resourceCfg.patient) {
      text += `| Patient Reference | ${resourceCfg.patient} | ${getElementDescription(resourceDef, resourceCfg.patient)} |\n`;
    }

    if (resourceCfg.defaults) {
      Object.keys(resourceCfg.defaults).forEach(d => {
        let val = resourceCfg.defaults[d];
        if (typeof val === 'object' && !(val instanceof  Date) && val['$if-present']) {
          // This is a conditional construct to determine the value.
          val = `_${val['$then']}_ when _${val['$if-present']}_ has a value; _${val['$else']}_ otherwise`;
        } else {
          val = `_${val}_`;
        }
        text += `| Default Value | ${d} | ${getElementDescription(resourceDef, d)} <br /> **Default:** ${val} |\n`;
      });
    }

    if (resourceCfg.aliases) {
      Object.keys(resourceCfg.aliases).forEach(a => {
        let field = resourceCfg.aliases[a];
        text += `| Alias | ${a} | Alias for _${field}_.|\n`;
      });
    }

    text += '\n';

    text +=
`
See the [${r} FHIR Documentation](${fhirLink}) for the full list of
available fields, definitions, and allowable values.
`;
  });

  fs.writeFileSync(path.join(__dirname, '..', `FHIR_${version.toUpperCase()}.md`), text, 'utf8');
}

function getElement(sd, name) {
  return sd.snapshot.element.find(e => {
    const targetPath = `${sd.id}.${name}`;
    if (e.path === targetPath) {
      return true;
    }
    // Handle the case of choices (e.g., medicationCodeableConcept should match on path medication[x])
    if (e.path.endsWith('[x]')) {
      return e.type.some(t => e.path.replace(/\[x]$/, _.upperFirst(t.code)) === targetPath);
    }
    return false;
  });
}

function getElementDescription(sd, name) {
  const element = getElement(sd, name);
  if (element.definition) {
    return element.definition;
  } else if (element.short) {
    return element.short;
  }
}