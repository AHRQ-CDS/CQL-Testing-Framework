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

library Factors_to_Consider_in_Managing_Chronic_Pain_STU3_Test version '1.0.0'

// # Data model #

// The FHIR STU3 model is used for testing purposes only.  It has not been piloted.
using FHIR version '3.0.0'

// # Referenced libraries #

// The CDS Connect Commons for FHIRv300 library provides functions representing commonly used CDS logic and patterns.
include CDS_Connect_Commons_for_FHIRv300 version '1.1.0' called C3F
// The FHIRHelpers library provides common functions for simplifying interaction w/ the FHIR v300 data model.
include FHIRHelpers version '3.0.0' called FHIRHelpers

// # Value sets and codes #

// ## Code Systems ##

codesystem "LOINC": 'http://loinc.org'
codesystem "SNOMED-CT": 'http://snomed.info/sct'

// Several concepts needed by the Pain Management Summary CDS do not yet have standardized codes associated with them.
// The CDS logic authors have registered new Logical Object Identifier Names and Codes (LOINC) codes, but they are
// not yet available.  Once available, the CDS will be updated.  Until then, CDS implementors will need to map to
// local codes (signified by the LOCAL code system below) or replace them with their own codes.
codesystem "LOCAL": 'http://cds.ahrq.gov/cdsconnect/pms'

// ## Value sets ##

// List value sets used by the artifact. The links to the Value Set Authority Center (VSAC) point to the latest
// expansion of each value set available.

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.37/expansion)
valueset "Conditions associated with chronic pain": '2.16.840.1.113762.1.4.1032.37'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.34/expansion)
valueset "Opioid Pain Medications": '2.16.840.1.113762.1.4.1032.34'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.54/expansion)
valueset "Adjuvant Analgesic Medications": '2.16.840.1.113762.1.4.1032.54'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.105.12.1007/expansion)
valueset "Major Depression": '2.16.840.1.113883.3.464.1003.105.12.1007'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.52/expansion)
valueset "Anxiety": '2.16.840.1.113762.1.4.1032.52'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.106.12.1004/expansion)
valueset "Substance use disorder": '2.16.840.1.113883.3.464.1003.106.12.1004'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.40/expansion)
valueset "Suicide attempt": '2.16.840.1.113762.1.4.1032.40'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.53/expansion)
valueset "Sleep-disordered breathing": '2.16.840.1.113762.1.4.1032.53'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.109.12.1028/expansion)
valueset "Kidney Failure": '2.16.840.1.113883.3.464.1003.109.12.1028'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.199.12.1035/expansion)
valueset "Chronic Liver Disease": '2.16.840.1.113883.3.464.1003.199.12.1035'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1047.42/expansion)
valueset "Liver Disease": '2.16.840.1.113762.1.4.1047.42'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.526.3.378/expansion)
valueset "Pregnancy": '2.16.840.1.113883.3.526.3.378'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.26/expansion)
valueset "Non opiod pain medications": '2.16.840.1.113762.1.4.1032.26'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.36/expansion)
valueset "Non pharmacologic treatments for chronic pain": '2.16.840.1.113762.1.4.1032.36'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.55/expansion)
valueset "Risk assessments relevant to pain management": '2.16.840.1.113762.1.4.1032.55'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.43/expansion)
valueset "Benzodiazepine medications": '2.16.840.1.113762.1.4.1032.43'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.42/expansion)
valueset "Naloxone medications": '2.16.840.1.113762.1.4.1032.42'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.28/expansion)
valueset "Urine drug screen for pain management": '2.16.840.1.113762.1.4.1032.28'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.44/expansion)
valueset "Stool softeners and laxatives": '2.16.840.1.113762.1.4.1032.44'

// ## Individual codes ##

// list individual codes from code systems used directly in the CQL logic. Individual codes are used when there is
// a single code from a particular vocabulary standard used to represent a clinical concept. It is considered
// best-practice not to create value sets containing a single code.

code "Pregnancy status code": '82810-3' from "LOINC" display 'Pregnancy status'
code "Pregnant code": '77386006' from "SNOMED-CT" display 'Patient currently pregnant (finding)'
code "Suicidal deliberate poisoning code": '86849004' from "SNOMED-CT" display 'Suicidal deliberate poisoning'
code "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported] code":
  '55758-7' from "LOINC" display 'Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]'
code "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported] code":
  '44261-6' from "LOINC" display 'Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]'
code "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ] code":
  '70274-6' from "LOINC" display 'Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]'
code "Total score [AUDIT] code": '75624-7' from "LOINC" display 'Total score [AUDIT]'
code "Total score [AUDIT-C] code": '75626-2' from "LOINC" display 'Total score [AUDIT-C]'
code "Total score [DAST-10] code": '82667-7' from "LOINC" display 'Total score [DAST-10]'
code "Pain severity Wong-Baker FACES Scale code": '38221-8' from "LOINC" display 'Pain severity Wong-Baker FACES Scale'

// The following codes do not yet have standardized codes associated with them so are expressed as LOCAL codes.
// As standardized codes become available, this CDS will be updated to use standard codes rather than LOCAL codes.

// Krebs et al, Development and initial validation of the PEG, a 3-item scale assessing pain intensity and interference,
// Journal of General Internal Medicine, 2009 June, 24:733-738.
code "Pain Enjoyment General Activity (PEG) Assessment code":
  'PEGASSESSMENT' from "LOCAL" display 'Pain Enjoyment General Activity (PEG) Assessment'
code "Pain code": 'PEGPAIN' from "LOCAL" display 'Pain'
code "Enjoyment of life code": 'PEGENJOYMENT' from "LOCAL" display 'Enjoyment of life'
code "General activity code": 'PEGGENERALACTIVITY' from "LOCAL" display 'General activity'

// Hill et al, Comparison of stratified primary care management for low back pain with current best practice
// (STarT Back): a randomised controlled trial, The Lancet , Volume 378 , Issue 9802 , 1560 - 1571.
code "STarT Back Screening Tool code": 'STARTBACK' from "LOCAL" display 'STarT Back Screening Tool'

code "Single question r/t ETOH use code": 'SQETOHUSE' from "LOCAL" display 'Single question r/t ETOH use'
code "Single question r/t drug use code": 'SQDRUGUSE' from "LOCAL" display 'Single question r/t drug use'
code "Morphine Milligram Equivalent (MME) code": 'MME' from "LOCAL" display 'Morphine Milligram Equivalent (MME)'

// CQL currently requires concept declarations to contain references to code declarations.

concept "Pregnancy status": { "Pregnancy status code" } display 'Pregnancy status'
concept "Pregnant": { "Pregnant code" } display 'Patient currently pregnant (finding)'
concept "Suicidal deliberate poisoning":
  { "Suicidal deliberate poisoning code" } display 'Suicidal deliberate poisoning'
concept "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]":
  { "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported] code" }
  display 'Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]'
concept "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]":
  { "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported] code" }
  display 'Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]'
concept "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]":
  { "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ] code" }
  display 'Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]'
concept "Total score [AUDIT]": { "Total score [AUDIT] code" } display 'Total score [AUDIT]'
concept "Total score [AUDIT-C]": { "Total score [AUDIT-C] code" } display 'Total score [AUDIT-C]'
concept "Total score [DAST-10]": { "Total score [DAST-10] code" } display 'Total score [DAST-10]'
concept "Pain severity Wong-Baker FACES Scale":
  { "Pain severity Wong-Baker FACES Scale code" } display 'Pain severity Wong-Baker FACES Scale'
concept "Pain Enjoyment General Activity (PEG) Assessment":
  { "Pain Enjoyment General Activity (PEG) Assessment code" } display 'Pain Enjoyment General Activity (PEG) Assessment'
concept "Pain": { "Pain code" } display 'Pain'
concept "Enjoyment of life": { "Enjoyment of life code" } display 'Enjoyment of life'
concept "General activity": { "General activity code" } display 'General activity'
concept "STarT Back Screening Tool": { "STarT Back Screening Tool code" } display 'STarT Back Screening Tool'
concept "Single question r/t ETOH use": { "Single question r/t ETOH use code" } display 'Single question r/t ETOH use'
concept "Single question r/t drug use": { "Single question r/t drug use code" } display 'Single question r/t drug use'
concept "Morphine Milligram Equivalent (MME)":
  { "Morphine Milligram Equivalent (MME) code" } display 'Morphine Milligram Equivalent (MME)'

// # Parameters #

// The InclusionMedicationsLookbackPeriod allows CDS implementors to specify how far the inclusion logic should look
// back for qualifying active medications. By default, the inclusion logic will look back 180 days.
parameter InclusionMedicationsLookbackPeriod default 180 days

// # CDS logic #

context Patient

// ## Re-usable functions ##

// The summary logic contains many constructs that are needed throughout the logic. Where possible, these constructs
// have been developed as re-usable functions that can be invoked wherever they are needed.

// Returns the first-found display text for a CodeableConcept, looking first at the `text` attribute, then the
// `display` on each `coding` until it finds a non-null value.
// @param c - a FHIR CodeableConcept to get text from
// @returns {System.String} the display text or null if none is found
define function ConceptText(c FHIR.CodeableConcept):
  Coalesce(c.text.value, Coalesce((c.coding) c2 return c2.display.value))

// We do not reliably get ranges back from EHR data, but ranges are important to understanding assessment scores in
// the summary.  This function adds ranges to the name for known assessments.
// @param c - a FHIR CodeableConcept to get the updated text for
// @returns {System.String} the display text with range information appended
define function ConceptTextWithRange(c FHIR.CodeableConcept):
  if c ~ "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]"
    then ConceptText(c) + ' [Range: 0-6]'
  else if c ~ "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]"
    then ConceptText(c) + ' [Range: 0-27]'
  else if c ~ "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]"
    then ConceptText(c) + ' [Range: 0-21]'
  else if c ~ "Total score [AUDIT]"
    then ConceptText(c) + ' [Range: 0-40]'
  else if c ~ "Total score [AUDIT-C]"
    then ConceptText(c) + ' [Range: 0-12]'
  else if c ~ "Total score [DAST-10]"
    then ConceptText(c) + ' [Range: 0-10]'
  else if c ~ "Pain severity Wong-Baker FACES Scale"
    then ConceptText(c) + ' [Range: 0-10]'
  else if c ~ "Pain Enjoyment General Activity (PEG) Assessment"
    then ConceptText(c) + ' [Range: 0-10]'
  else if c ~ "STarT Back Screening Tool"
    then ConceptText(c) + ' [Range: 0-9]'
  else
    ConceptText(c)

// Returns a text representation of a date using the CQL `ToString` function.
// @param d - a FHIR date to get text for
// @returns {System.String} the text representation of the date
define function DateText(d FHIR.date):
  ToString(d.value)

// Returns a text representation of a dateTime using the CQL `ToString` function.
// @param d - a FHIR dateTime to get text for
// @returns {System.String} the text representation of the dateTime
define function DateTimeText(d FHIR.dateTime):
  ToString(d.value)

// Returns a text representation of an instant using the CQL `ToString` function.
// @param i - a FHIR instant to get text for
// @returns {System.String} the text representation of the instant
define function InstantText(i FHIR.instant):
  ToString(i.value)

// Returns a text representation of a Quantity with the Quantity's value and unit.
// @param q - a FHIR Quantity to get text for
// @returns {System.String} the text representation of the Quantity
define function QuantityText(q FHIR.Quantity):
  if (q is null) then null
  else if (q.unit is not null) then ToString(q.value.value) + ' ' + q.unit.value
  else if (q.code is not null) then ToString(q.value.value) + ' ' + q.code.value
  else ToString(q.value.value)

// Returns a tuple containing a Period's start and end as text representations.
// @param p - a FHIR Period to get a tuple for
// @returns {Tuple<Start System.String, End System.String>} the tuple representation of the Period
define function PeriodObject(p FHIR.Period):
  if p is null then null
  else
    {
      Start: DateTimeText(p."start"),
      End: DateTimeText(p."end")
    }

// Returns a tuple containing a Range's low and high as text representations.
// @param r - a FHIR Range to get a tuple for
// @returns {Tuple<Low System.String, High System.String>} the tuple representation of the Range
define function RangeObject(r FHIR.Range):
  if r is null then null
  else
    {
      Low: QuantityText(r.low),
      High: QuantityText(r.high)
    }

// Returns a text representation of a date associated with an Observation, preferring `effectiveDateTime`, then
// `effectivePeriod.start`, then `issued`.
// @param o - a FHIR Observation to get the text date from
// @returns {System.String} the text representation of a relevant date from the Observation
define function ObservationDate(o FHIR.Observation):
  Coalesce(DateTimeText(o.effective as FHIR.dateTime), DateTimeText((o.effective as FHIR.Period)."start"), InstantText(o.issued))

// Returns a text representation of a date associated with a MedicationStatement, preferring `effectiveDateTime`, then
// `.start`.
// @param m - a FHIR MedicationStatement to get the text date from
// @returns {System.String} the text representation of a relevant date from the MedicationStatement
define function MedicationStatementDate(s FHIR.MedicationStatement):
  Coalesce(DateTimeText(s.effective as FHIR.dateTime), DateTimeText((s.effective as FHIR.Period)."start"))

// Returns a text representation of a Condition's onset, whether represented as a dateTime, Period, Quantity (Age),
// Range (Age), or string.
// @param c - a FHIR Condition to get the text representation of the onset from
// @returns {System.String} the text representation of the Condition's onset
define function Onset(c FHIR.Condition):
  Coalesce( List{
    DateTimeText(c.onset as FHIR.dateTime),
    QuantityText(c.onset as FHIR.Age),
    PeriodObject(c.onset as FHIR.Period),
    RangeObject(c.onset as FHIR.Range),
    (c.onset as FHIR.string).value
  })

// Returns a text representation of a Condition's abatement, whether represented as a dateTime, Period, Quantity (Age),
// Range (Age), string, or boolean.
// @param c - a FHIR Condition to get the text representation of the abatement from
// @returns {System.String} the text representation of the Condition's abatement
define function Abatement(c FHIR.Condition):
  Coalesce( List{
    DateTimeText(c.abatement as FHIR.dateTime),
    QuantityText(c.abatement as FHIR.Age),
    PeriodObject(c.abatement as FHIR.Period),
    RangeObject(c.abatement as FHIR.Range),
    (c.abatement as FHIR.string).value,
    ToString((c.abatement as FHIR.boolean).value)
  })

// Sorts the components of a PEG Observation to be in the order P (Pain), E (Enjoyment of life), G (General activity)
// @param c - a list of FHIR Observation.Components to be sorted in PEG order
// @returns {List<FHIR."Observation.Component">} the list of FHIR Observation.Components sorted in PEG order
define function SortPegComponents(c List<FHIR."Observation.Component">):
  flatten List{
    c OC where OC.code ~ "Pain",
    c OC where OC.code ~ "Enjoyment of life",
    c OC where OC.code ~ "General activity"
  }

// ## Target population ##

// INCLUSIONS

// Determines if patient's age, in years, at the time CQL is run, is at least 18 years old
define Is18orOlder:
  AgeInYears() >= 18

// Conditions associated with chronic pain
define ConditionsAssociatedWithChronicPain:
  C3F.Confirmed(C3F.ActiveOrRecurring([Condition: "Conditions associated with chronic pain"]))

// Determines if the patient has any of the conditions associated with chronic pain
define HasConditionAssociatedWithChronicPain:
  exists(ConditionsAssociatedWithChronicPain)

// Determines if the patient has any record of opioid pain medications in the lookback period
//       - Medication Order within past 180 days (lookback can be made a parameter)
//       - Medication Statement by patient within past 180 days (lookback can be made a parameter)
define HasRecentOpioidPainMedication:
  exists(C3F.ActiveCompletedOrStoppedMedicationRequest(C3F.MedicationRequestLookBack(
    [MedicationRequest: "Opioid Pain Medications"],
    InclusionMedicationsLookbackPeriod)
  ))
  or exists(C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Opioid Pain Medications"],
    InclusionMedicationsLookbackPeriod)
  ))

// Determines if the patient has any record of adjuvant analgesic medications in the lookback period
//       - Medication Order within past 180 days (lookback can be made a parameter)
//       - Medication Statement by patient within past 180 days (lookback can be made a parameter)
define HasRecentAdjuvantAnalgesicMedication:
  exists(C3F.ActiveCompletedOrStoppedMedicationRequest(C3F.MedicationRequestLookBack(
    [MedicationRequest: "Adjuvant Analgesic Medications"],
    InclusionMedicationsLookbackPeriod)
  ))
  or exists(C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Adjuvant Analgesic Medications"],
    InclusionMedicationsLookbackPeriod)
  ))

// Determines if the patient meets the inclusion criteria for the CDS. Inclusion criteria is:
// - Age >=18 years
// - AND
//   - OR Conditions associated with chronic pain
//   - OR Opioid pain medication
//   - OR Adjuvant analgesic medication
define MeetsInclusionCriteria:
  Is18orOlder
  and (
    HasConditionAssociatedWithChronicPain
    or HasRecentOpioidPainMedication
    or HasRecentAdjuvantAnalgesicMedication
  )

// EXCLUSIONS

// TAKE NOTICE: This CDS is not intended for patients who meet any of the following criteria:
// 1. Younger than 18 years of age
// 2. Undergoing end-of-life care (hospice or palliative)
// 3. Undergoing active cancer treatment
//
// The first exclusion is explicitly accounted for under INCLUSIONS.
// The second and third exclusions cannot be realiably detected for all patients using just EHR data. For that reason
// they are not implemented in this CDS. Care providers should use their judgement when applying this CDS to their
// patients.

// ## Intervention(s) ##

// DISPLAY and POPULATE a Pain Management Summary of the following items:

// PERTINENT MEDICAL HISTORY

// Conditions associated with chronic pain and their dates of onset

define ReportConditionsAssociatedWithChronicPain:
  (ConditionsAssociatedWithChronicPain) C
  return {
    Name:  ConceptText(C.code),
    Status:    C.clinicalStatus.value,
    Onset: Onset(C),
    DateRecorded: DateTimeText(C.assertedDate)
  }
  sort by (Onset as String) desc

// Conditions that are risk factors for opioid-related harms and their dates of onset
// This is a union of nine value sets (w/ different filtering criteria)

define DepressionConditions:
  C3F.Confirmed(C3F.ActiveOrRecurring([Condition: "Major Depression"]))

define AnxietyConditions:
  C3F.Confirmed(C3F.ActiveOrRecurring([Condition: "Anxiety"]))

define SubstanceUseDisorderConditions:
  C3F.Confirmed([Condition: "Substance use disorder"])

define SuicideAttemptConditions:
  C3F.Confirmed([Condition: "Suicide attempt"])
  union C3F.Confirmed([Condition: "Suicidal deliberate poisoning"])

define SleepDisorderedBreathingConditions:
  C3F.Confirmed(C3F.ActiveOrRecurring([Condition: "Sleep-disordered breathing"]))

define RenalDysfunctionConditions:
  C3F.Confirmed(C3F.ActiveOrRecurring([Condition: "Kidney Failure"]))

define HepaticDysfunctionConditions:
  C3F.Confirmed(C3F.ActiveOrRecurring([Condition: "Chronic Liver Disease"]))
  union C3F.Confirmed(C3F.ActiveOrRecurring([Condition: "Liver Disease"]))

define PregnancyConditions:
  C3F.Confirmed(C3F.ConditionLookBack(C3F.ActiveOrRecurring([Condition: "Pregnancy"]), 42 weeks))

define PregnancyObservations:
  C3F.Verified(C3F.ObservationLookBack([Observation: "Pregnancy status"], 42 weeks))

define MostRecentPregnancyObservation:
  C3F.MostRecent(PregnancyObservations)

define MostRecentPregnancyObservationIsPositive:
  C3F.ConceptValue(MostRecentPregnancyObservation) ~ "Pregnant"

define Is65orOlder:
  AgeInYears() >= 65

define ConditionRiskFactorsForOpioidRelatedHarms:
  DepressionConditions
  union AnxietyConditions
  union SubstanceUseDisorderConditions
  union SuicideAttemptConditions
  union SleepDisorderedBreathingConditions
  union RenalDysfunctionConditions
  union HepaticDysfunctionConditions
  union PregnancyConditions

// Encounter diagnoses that are risk factors for opioid-related harms and their dates of onset. Some risk factors may
// not exist on the problem list, and therefore may not be represented as Conditions (depending on EHR implementation).
// For this, the logic also looks at the patient's encounters, trying to find risk factors recorded as encounter
// diagnoses.

define EncounterRiskFactorsForOpioidRelatedHarms:
  [Encounter] E where exists(
    E.reason R where
      C3F.NullSafeToConcept(R) in "Major Depression"
      or C3F.NullSafeToConcept(R) in "Anxiety"
      or C3F.NullSafeToConcept(R) in "Substance use disorder"
      or C3F.NullSafeToConcept(R) in "Suicide attempt"
      or C3F.NullSafeToConcept(R) ~ "Suicidal deliberate poisoning"
      or C3F.NullSafeToConcept(R) in "Sleep-disordered breathing"
      or C3F.NullSafeToConcept(R) in "Kidney Failure"
      or C3F.NullSafeToConcept(R) in "Chronic Liver Disease"
      or C3F.NullSafeToConcept(R) in "Liver Disease"
      // Pregnancy not considered in Encounter diagnoses because this is an unrestricted lookback.
  )

// NOTE: As a convention, if an expression's name starts with "Report", its purpose is to format data for the purpose
// of building the final summary object.

// Format the risk factors in a uniform way despite the different sources of the data (conditions, encounter diagnoses,
// etc.). Note that conditions do not have a "Visit" date and encounter diagnoses do not have a status, onset date,
// recorded date, or abatement date.

define ReportConditionRiskFactorsForOpioidRelatedHarms:
  (ConditionRiskFactorsForOpioidRelatedHarms) C
  return {
    Name:      ConceptText(C.code),
    Status:    C.clinicalStatus.value,
    Onset:     Onset(C),
    DateRecorded: DateTimeText(C.assertedDate),
    Abatement: Abatement(C),
    Visit:     null as Tuple{ Start String, End String }
  }
  sort by (Onset as String) desc, (Abatement as String) desc

define function GetEncounterDiagnosesRiskFactorsForOpioidRelatedHarms(enc Encounter):
  (enc.reason) R
    where C3F.NullSafeToConcept(R) in "Major Depression"
      or C3F.NullSafeToConcept(R) in "Anxiety"
      or C3F.NullSafeToConcept(R) in "Substance use disorder"
      or C3F.NullSafeToConcept(R) in "Suicide attempt"
      or C3F.NullSafeToConcept(R) ~ "Suicidal deliberate poisoning"
      or C3F.NullSafeToConcept(R) in "Sleep-disordered breathing"
      or C3F.NullSafeToConcept(R) in "Kidney Failure"
      or C3F.NullSafeToConcept(R) in "Chronic Liver Disease"
      or C3F.NullSafeToConcept(R) in "Liver Disease"
      // Pregnancy not considered in Encounter diagnoses because this is an unrestricted lookback.
    return {
      Name:      ConceptText(R),
      Status:    null as String,
      Onset:     null as String,
      DateRecorded: null as String,
      Abatement: null as String,
      Visit:     PeriodObject(enc.period)
    }

define ReportEncounterRiskFactorsForOpioidRelatedHarms:
  (flatten((EncounterRiskFactorsForOpioidRelatedHarms) E
  return GetEncounterDiagnosesRiskFactorsForOpioidRelatedHarms(E))) D
  sort by Visit.Start desc, Visit.End desc

// Shape the pregnancy Observation as a Condition, since this is the backup approach for detecting a pregnancy in case
// there are no active Conditions found.
define ReportMostRecentPositivePregnancyObservation:
  if MostRecentPregnancyObservationIsPositive then
    {
      Name: ConceptText(MostRecentPregnancyObservation.code),
      Status: ConceptText(MostRecentPregnancyObservation.value as FHIR.CodeableConcept),
      Onset: ToString(Coalesce(
        (MostRecentPregnancyObservation.effective as FHIR.dateTime).value,
        (MostRecentPregnancyObservation.effective as FHIR.Period)."start"
      )),
      DateRecorded: ToString(MostRecentPregnancyObservation.issued),
      Abatement: null as String,
      Visit: null as Tuple{ Start String, End String }
    }
  else
    null

// Shape the case of being 65 or older as a Condition for the purposes of building the summary.
define ReportOlderThan65:
  if Is65orOlder then
    {
      Name: '65 years or older',
      Status: 'active',
      Onset: null as String,
      DateRecorded: null as String,
      Abatement: null as String,
      Visit: null as Tuple{ Start String, End String }
    }
  else
    null

define ReportRiskFactorsForOpioidRelatedHarms:
  // If a pregnancy Condition is present, use that.
  if Exists(PregnancyConditions) then
    (ReportConditionRiskFactorsForOpioidRelatedHarms
      union ReportEncounterRiskFactorsForOpioidRelatedHarms
      union ReportOlderThan65) C
  // Otherwise, try to find a positive pregnancy status in an Observation.
  else
    (ReportConditionRiskFactorsForOpioidRelatedHarms
      union ReportEncounterRiskFactorsForOpioidRelatedHarms
      union ReportOlderThan65
      union ReportMostRecentPositivePregnancyObservation) C
  sort by (if Onset is not null then Onset as String else Visit.Start) desc, Visit.End desc, (Abatement as String) desc

// PAIN ASSESSMENT

// Numeric pain intensity assessment - scores and dates (lookback 2 years)

define NumericPainIntensityAssessments:
  C3F.Verified(C3F.ObservationLookBack([Observation: "Pain severity Wong-Baker FACES Scale"], 2 years))

define ReportNumericPainIntensityAssessments:
  (NumericPainIntensityAssessments) A
  return {
    Name:           ConceptTextWithRange(A.code),
    Score:          QuantityText(A.value as FHIR.Quantity),
    Interpretation: Coalesce( ConceptText(A.interpretation),  ConceptText(A.value as FHIR.CodeableConcept) ),
    Date:           ObservationDate(A)
  }
  sort by Date desc

// Pain Enjoyment General Activity (PEG) Assessment - scores and dates (OID: N/A use local codes) (lookback 2 years)
// Note: this includes listing the response to each of the 3 questions, plus the total score

define PainEnjoymentGeneralActivityAssessments:
  C3F.Verified(C3F.ObservationLookBack([Observation: "Pain Enjoyment General Activity (PEG) Assessment"], 2 years))

define ReportPainEnjoymentGeneralActivityAssessments:
  (PainEnjoymentGeneralActivityAssessments) A
  return {
    Name:           ConceptTextWithRange(A.code),
    Score:          QuantityText(A.value as FHIR.Quantity),
    Interpretation: Coalesce( ConceptText(A.interpretation),  ConceptText(A.value as FHIR.CodeableConcept) ),
    Questions:      (SortPegComponents(A.component)) C return {
                      "Name": ConceptText(C.code),
                      "Score": QuantityText(C.value as FHIR.Quantity)
                    },
    Date:           ObservationDate(A)
  }
  sort by Date desc

// STarT Back Screening Tool - Overall score and dates (lookback 2 years)

define STarTBackAssessments:
  C3F.Verified(C3F.ObservationLookBack([Observation: "STarT Back Screening Tool"], 2 years))

define ReportSTarTBackAssessments:
  (STarTBackAssessments) A
  return {
    Name:           ConceptTextWithRange(A.code),
    Score:          QuantityText(A.value as FHIR.Quantity),
    Interpretation: Coalesce( ConceptText(A.interpretation),  ConceptText(A.value as FHIR.CodeableConcept) ),
    Date:           ObservationDate(A)
  }
  sort by Date desc

// HISTORICAL TREATMENTS

// Opioid medication orders and statements with dates (lookback 2 years)

define OpioidMedicationRequests:
  C3F.ActiveCompletedOrStoppedMedicationRequest(C3F.MedicationRequestLookBack(
    [MedicationRequest: "Opioid Pain Medications"],
    2 years
  ))

define OpioidMedicationStatements:
  C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Opioid Pain Medications"],
    2 years
  ))

define ReportOpioidMedicationRequests:
  (OpioidMedicationRequests) O
  return {
    Type:  'Order',
    Name:  ConceptText(O.medication as FHIR.CodeableConcept),
    Start: DateTimeText(O.authoredOn),
    End:   null as String, // MedicationRequest end date not supported in STU3,
    Status: O.status.value
  }
  sort by Start desc, End desc

define ReportOpioidMedicationStatements:
  (OpioidMedicationStatements) S
  return {
    Type:  'Statement',
    Name:  ConceptText(S.medication as FHIR.CodeableConcept),
    Start: MedicationStatementDate(S),
    End:   DateTimeText((S.effective as FHIR.Period)."end"),
    Status: S.status.value
  }
  sort by Start desc, End desc

define ReportOpioidMedications:
  (ReportOpioidMedicationRequests union ReportOpioidMedicationStatements) M
  sort by Start desc, End desc

// Non-opioid medication orders and statements with dates (lookback 2 years)

define NonOpioidMedicationRequests:
  C3F.ActiveCompletedOrStoppedMedicationRequest(C3F.MedicationRequestLookBack(
    [MedicationRequest: "Non opiod pain medications"],
    2 years
  ))

define NonOpioidMedicationStatements:
  C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Non opiod pain medications"],
    2 years
  ))

define ReportNonOpioidMedicationRequests:
  (NonOpioidMedicationRequests) O
  return {
    Type:  'Order',
    Name:  ConceptText(O.medication as FHIR.CodeableConcept),
    Start: DateTimeText(O.authoredOn),
    End:   null as String, // MedicationRequest end date not supported in STU3,
    Status: O.status.value
  }
  sort by Start desc, End desc

define ReportNonOpioidMedicationStatements:
  (NonOpioidMedicationStatements) S
  return {
    Type:  'Statement',
    Name:  ConceptText(S.medication as FHIR.CodeableConcept),
    Start: MedicationStatementDate(S),
    End:   DateTimeText((S.effective as FHIR.Period)."end"),
    Status: S.status.value
  }
  sort by Start desc, End desc

define ReportNonOpioidMedications:
  (ReportNonOpioidMedicationRequests union ReportNonOpioidMedicationStatements) M
  sort by Start desc, End desc

// Non-pharmacologic treatment orders and referrals with dates (lookback 2 years)

define NonPharmacologicTreatmentProcedures:
  C3F.ProcedurePerformance(C3F.ProcedureLookBack([Procedure: "Non pharmacologic treatments for chronic pain"], 2 years))

define ReportNonPharmacologicTreatmentProcedures:
  (NonPharmacologicTreatmentProcedures) P
  return {
    Type: 'Procedure',
    Name: ConceptText(P.code),
    Date: Coalesce(DateTimeText(P.performed as FHIR.dateTime), DateTimeText((P.performed as FHIR.Period)."start"))
  }
  sort by Date desc

define NonPharmacologicTreatmentProcedureRequests:
  C3F.ProcedureRequestActiveOrCompleted(
    C3F.ProcedureRequestLookBack([ProcedureRequest: "Non pharmacologic treatments for chronic pain"], 2 years)
  )

define ReportNonPharmacologicTreatmentProcedureRequests:
  (NonPharmacologicTreatmentProcedureRequests) P
  return {
    Type: 'ProcedureRequest',
    Name: ConceptText(P.code),
    Date: DateTimeText(P.authoredOn)
  }
  sort by Date desc

define NonPharmacologicTreatmentReferralRequests:
  C3F.ReferralRequestActiveOrCompleted(C3F.ReferralRequestLookBack(
    [ReferralRequest] R where exists(
      (R.serviceRequested) SR where SR in "Non pharmacologic treatments for chronic pain"
    ),
    2 years
  ))

define ReportNonPharmacologicTreatmentReferralRequests:
  (NonPharmacologicTreatmentReferralRequests) P
  return {
    Type: 'Referral',
    Name: Coalesce((P.serviceRequested) SR return ConceptText(SR)),
    Date: DateTimeText(P.authoredOn)
  }
  sort by Date desc

define ReportNonPharmacologicTreatments:
  (ReportNonPharmacologicTreatmentProcedures
    union ReportNonPharmacologicTreatmentProcedureRequests
    union ReportNonPharmacologicTreatmentReferralRequests) M
  sort by Date desc

// Stool softeners and laxatives - orders and statements with dates (lookback 6 months)

define StoolSoftenersAndLaxativesOrders:
  C3F.ActiveCompletedOrStoppedMedicationRequest(C3F.MedicationRequestLookBack(
    [MedicationRequest: "Stool softeners and laxatives"],
    6 months
  ))

define StoolSoftenersAndLaxativesStatements:
  C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Stool softeners and laxatives"],
    6 months
  ))

define ReportStoolSoftenersAndLaxativesOrders:
  (StoolSoftenersAndLaxativesOrders) O
  return {
    Type:  'Order',
    Name:  ConceptText(O.medication as FHIR.CodeableConcept),
    Start: DateTimeText(O.authoredOn),
    End:   null as String, // MedicationRequest end date not supported in STU3,
    Status: O.status.value
  }
  sort by Start desc, End desc

define ReportStoolSoftenersAndLaxativesStatements:
  (StoolSoftenersAndLaxativesStatements) S
  return {
    Type:  'Statement',
    Name:  ConceptText(S.medication as FHIR.CodeableConcept),
    Start: MedicationStatementDate(S),
    End:   DateTimeText((S.effective as FHIR.Period)."end"),
    Status: S.status.value
  }
  sort by Start desc, End desc

define ReportStoolSoftenersAndLaxatives:
  (ReportStoolSoftenersAndLaxativesOrders union ReportStoolSoftenersAndLaxativesStatements) M
  sort by Start desc, End desc

// RISK CONSIDERATIONS

// MME (MOST RECENT w/ lookback 6 months) - amount and date

define MostRecentMME:
  C3F.MostRecent(C3F.Verified(C3F.ObservationLookBack([Observation: "Morphine Milligram Equivalent (MME)"], 6 months)))

define ReportMostRecentMME:
  if MostRecentMME is null
  then null
  else
    (MostRecentMME) M
    return {
      Name:   ConceptText(M.code),
      Result: QuantityText(M.value as FHIR.Quantity),
      Date:   ObservationDate(M)
    }

// Urine drug screen - dates and results (all screens w/ lookback of 1 year)

define UrineDrugScreens:
  C3F.Verified(C3F.ObservationLookBack([Observation: "Urine drug screen for pain management"], 1 year))

define ReportUrineDrugScreens:
  (UrineDrugScreens) S
  return {
    Name:           ConceptText(S.code),
    Result:         Coalesce( QuantityText(S.value as FHIR.Quantity), (S.value as FHIR.string).value, ConceptText(S.value as FHIR.CodeableConcept) ),
    Interpretation: Coalesce( ConceptText(S.interpretation) ),
    Date:           ObservationDate(S)
  }
  sort by Date desc

// Benzodiazepine Medications (lookback of 2 years)-  orders and statements with dates

define BenzodiazepineMedicationRequests:
  C3F.ActiveCompletedOrStoppedMedicationRequest(C3F.MedicationRequestLookBack(
    [MedicationRequest: "Benzodiazepine medications"],
    2 years
  ))

define BenzodiazepineMedicationStatements:
  C3F.ActiveOrCompletedMedicationStatement(C3F.MedicationStatementLookBack(
    [MedicationStatement: "Benzodiazepine medications"],
    2 years
  ))

define ReportBenzodiazepineMedicationRequests:
  (BenzodiazepineMedicationRequests) O
  return {
    Type:  'Order',
    Name:  ConceptText(O.medication as FHIR.CodeableConcept),
    Start: DateTimeText(O.authoredOn),
    End:   null as String, // MedicationRequest end date not supported in STU3,
    Status: O.status.value
  }
  sort by Start desc, End desc

define ReportBenzodiazepineMedicationStatements:
  (BenzodiazepineMedicationStatements) S
  return {
    Type:  'Statement',
    Name:  ConceptText(S.medication as FHIR.CodeableConcept),
    Start: MedicationStatementDate(S),
    End:   DateTimeText((S.effective as FHIR.Period)."end"),
    Status: S.status.value
  }
  sort by Start desc, End desc

define ReportBenzodiazepineMedications:
  (ReportBenzodiazepineMedicationRequests union ReportBenzodiazepineMedicationStatements) M
  sort by Start desc, End desc

// Naloxone Medications (unrestricted lookback) - orders and statements with dates

define NaloxoneMedicationRequests:
  C3F.ActiveCompletedOrStoppedMedicationRequest([MedicationRequest: "Naloxone medications"])

define NaloxoneMedicationStatements:
  C3F.ActiveOrCompletedMedicationStatement([MedicationStatement: "Naloxone medications"])

define ReportNaloxoneMedicationRequests:
  (NaloxoneMedicationRequests) O
  return {
    Type:  'Order',
    Name:  ConceptText(O.medication as FHIR.CodeableConcept),
    Start: DateTimeText(O.authoredOn),
    End:   null as String, // MedicationRequest end date not supported in STU3,
    Status: O.status.value
  }
  sort by Start desc, End desc

define ReportNaloxoneMedicationStatements:
  (NaloxoneMedicationStatements) S
  return {
    Type:  'Statement',
    Name:  ConceptText(S.medication as FHIR.CodeableConcept),
    Start: MedicationStatementDate(S),
    End:   DateTimeText((S.effective as FHIR.Period)."end"),
    Status: S.status.value
  }
  sort by Start desc, End desc

define ReportNaloxoneMedications:
  (ReportNaloxoneMedicationRequests union ReportNaloxoneMedicationStatements) M
  sort by Start desc, End desc

// Risk screenings relevant to pain management - overall scores and dates (MOST RECENT w/ lookback 1 year)

define RiskScreeningsRelevantToPainManagement:
  C3F.Verified(C3F.ObservationLookBack(
    [Observation: "Risk assessments relevant to pain management"]
    union [Observation: "Single question r/t ETOH use"]
    union [Observation: "Single question r/t drug use"]
  , 1 year))

define ReportRiskScreeningsRelevantToPainManagement:
  (RiskScreeningsRelevantToPainManagement) S
  return {
    Name:           ConceptTextWithRange(S.code),
    Score:          Coalesce( QuantityText(S.value as FHIR.Quantity), (S.value as FHIR.string).value ),
    Interpretation: Coalesce( ConceptText(S.interpretation),  ConceptText(S.value as FHIR.CodeableConcept) ),
    Date:           ObservationDate(S)
  }
  sort by Date desc

// SUMMARY

// The Summary object represents the full Pain Management Summary to be displayed to the clinician.  All values are
// returned as user-friendly text representations, but a robust user interface (UI) should be implemented to
// display the data to the user in a friendly manner.  See the Pain Management Summary SMART on FHIR application as
// an example of how to integrate this summary into an EHR using modern web UI technologies.

define Summary: {
  Patient: {
    Name: Combine(Patient.name.given G return G.value, ' ') + ' ' + Combine(Patient.name.family F return F.value, ' '),
    Gender: Patient.gender.value,
    Age: AgeInYears(),
    MeetsInclusionCriteria: MeetsInclusionCriteria
  },
  PertinentMedicalHistory: {
    ConditionsAssociatedWithChronicPain: ReportConditionsAssociatedWithChronicPain,
    RiskFactorsForOpioidRelatedHarms: ReportRiskFactorsForOpioidRelatedHarms
  },
  PainAssessments: {
    NumericPainIntensityAssessments: ReportNumericPainIntensityAssessments,
    PainEnjoymentGeneralActivityAssessments: ReportPainEnjoymentGeneralActivityAssessments,
    STarTBackAssessments: ReportSTarTBackAssessments
  },
  HistoricalTreatments: {
    OpioidMedications: ReportOpioidMedications,
    NonOpioidMedications: ReportNonOpioidMedications,
    NonPharmacologicTreatments: ReportNonPharmacologicTreatments,
    StoolSoftenersAndLaxatives: ReportStoolSoftenersAndLaxatives
  },
  RiskConsiderations: {
    MostRecentMME: ReportMostRecentMME,
    UrineDrugScreens: ReportUrineDrugScreens,
    BenzodiazepineMedications: ReportBenzodiazepineMedications,
    NaloxoneMedications: ReportNaloxoneMedications,
    RiskScreeningsRelevantToPainManagement: ReportRiskScreeningsRelevantToPainManagement
  }
}
