library OtherFHIRv401Test version '0.0.1'

using FHIR version '4.0.1'

include FHIRHelpers version '4.0.1' called FHIRHelpers

parameter "LookbackPeriod" default 180

context Patient

define "TestParamAndIncludeSubset":
    {
      LookbackPeriod: "LookbackPeriod",
      Ignore: 'some other output'
    }

define AbatementAge:
  First([Condition] C).abatement as Age