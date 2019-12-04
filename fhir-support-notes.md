# Requirements

* For each resource, we need to know:
  * which field is a reference to the patient
  * what are the "default" values (e.g., status)

* We need to handle
  * ensuring certain supplied fields have a value from the VS (e.g., status)
  * ensuring cardinalities are obeyed
  * converting boolean to 'y' / 'n' for MedicationStatement.taken?
  * get[x] (for all the getters currently supported; e.g., getName)

# Approach

* Use DSTU2 versions of currently supported resource types first (as a test)

* Have JSON structure definitions for all FHIR resources/datatypes
  * for each version of FHIR

* Have config file that lists resources and their:
  * property name that maps to the patient of record
  * properties w/ default values (and what those values are)

* First handle the first `Patient` definition (using the same basic approach outlined below, which I will not repeat here)
* Loop through `data` array
* For each one, use `resourceType` to determine the resource type (duh)
* Lookup the resource type in the FHIR definitons to get structdef
* Lookup the resource type in the config file to get patient property and default values
* Create a JSON instance w/ `resourceType` set appropriately
* Loop through the object's properties
  * find property in structure definition for resource
  * check that provided value is compatible with element type
  * if so, handle the type appropriately (supporting our code notation, date parsing, etc)
  * else if not compatible, log an error
  * note: if it's a complex type, we need to either dig deeper into the structdef or potentially lookup the complex type's definition
    * may be able to use recursion to get the JSON instance for the complex type and then insert it into the parent JSON instance
  * if the patient property wasn't explicitly set, then set it to the current patient
  * if any of the properties w/ defaults weren't explicitly set, set them to the default