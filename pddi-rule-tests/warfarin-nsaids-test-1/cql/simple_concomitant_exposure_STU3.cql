// # Introduction

// NOTE: THIS IS AN UNTESTED FHIR STU3 PORT OF THE PAIN MANAGEMENT SUMMARY.
// THIS ARTIFACT IS INTENDED FOR TESTING PURPOSES ONLY!

// The Pain Management Summary artifact provides relevant information to consider when managing a patient’s pain.
// This CDS logic was informed by the Centers for Disease Control and Prevention (CDC) Guideline for Opioid Prescribing
// for Chronic Pain. The CDS is not a direct representation of any one recommendation statement within the guideline.
// Instead, the CDS compiles clinical concepts mentioned throughout the guideline in one consolidated summary for
// clinician review.
//
// In the process of authoring the logic, certain assumptions were made and details developed when the guideline did
// not provide enough specificity.  These decisions were made in the context of the CDS Connect Workgroup and CDC
// stakeholders, and are documented in the logic and/or in the CDS Connect artifact metadata.
//
// ##Source guideline: [CDC Guideline for Opioid Prescribing for Chronic Pain](https://www.cdc.gov/drugoverdose/prescribing/guideline.html)

library simple_concomitant_exposure_STU3 version '1.0.0'

// # Data model #

// The FHIR STU3 model is used for testing purposes only.  It has not been piloted.
using FHIR version '3.0.0'

// # Referenced libraries #

// The CDS Connect Commons for FHIRv102 library provides functions representing commonly used CDS logic and patterns.
include CDS_Connect_Commons_for_FHIRv300 version '1.1.0' called C3F

// The FHIRHelpers library provides common functions for simplifying interaction w/ the FHIR v102 data model.
include FHIRHelpers version '3.0.0' called FHIRHelpers

// # Value sets and codes #

// ## Code Systems ##

codesystem "RXNORM": 'http://www.nlm.nih.gov/research/umls/rxnorm'

// ## Value sets ##

// List value sets used by the artifact. The links to the Value Set Authority Center (VSAC) point to the latest
// expansion of each value set available.

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.37/expansion)
valueset "Warfarin": '2.16.840.1.113883.3.117.1.7.1.232'

valueset "Medications for Primary Headache NSAIDs": '2.16.840.1.113762.1.4.1046.84'

// ## Individual codes ##

// list individual codes from code systems used directly in the CQL logic. Individual codes are used when there is
// a single code from a particular vocabulary standard used to represent a clinical concept. It is considered
// best-practice not to create value sets containing a single code.


// The following codes do not yet have standardized codes associated with them so are expressed as LOCAL codes.
// As standardized codes become available, this CDS will be updated to use standard codes rather than LOCAL codes.


// CQL currently requires concept declarations to contain references to code declarations.


// # Parameters #

// The InclusionMedicationsLookbackPeriod allows CDS implementors to specify how far the inclusion logic should look
// back for qualifying active medications. By default, the inclusion logic will look back 180 days.
parameter InclusionMedicationsLookbackPeriod default 180 days

// # CDS logic #

context Patient

// ## Re-usable functions ##


// RISK CONSIDERATIONS

define WarfarinMedicationStatements:
  C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Warfarin"],
    InclusionMedicationsLookbackPeriod
  ))

define NsaidsMedicationStatements:
  C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Medications for Primary Headache NSAIDs"],
    InclusionMedicationsLookbackPeriod
  ))


// ## Target population ##

// INCLUSIONS

// Determines if the patient has any record of adjuvant analgesic medications in the lookback period
//       - Medication Request within past 180 days (lookback can be made a parameter)
//       - Medication Statement by patient within past 180 days (lookback can be made a parameter)
define HasRecentWarfarinMedication:
  exists(C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Warfarin"],
    InclusionMedicationsLookbackPeriod)
  ))
  and exists(C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Medications for Primary Headache NSAIDs"],
    InclusionMedicationsLookbackPeriod)
  ))

// EXCLUSIONS


// ## Intervention(s) ##

// SUMMARY

// The Summary object represents the full Pain Management Summary to be displayed to the clinician.  All values are
// returned as user-friendly text representations, but a robust user interface (UI) should be implemented to
// display the data to the user in a friendly manner.  See the Pain Management Summary SMART on FHIR application as
// an example of how to integrate this summary into an EHR using modern web UI technologies.

define Summary: {
    Patient: {
	Name: Combine(Patient.name.given G return G.value, ' ') + ' ' + Combine(Patient.name.family F return F.value, ' '),
	Gender: Patient.gender.value,
	Age: AgeInYears()
    },
    ConcomitantDrugExposure: HasRecentWarfarinMedication
}
