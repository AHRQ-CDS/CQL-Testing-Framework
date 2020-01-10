
# FHIR DSTU2 Resources

The CQL Testing framework supports all FHIR DSTU2 resource types.
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
default value they can override it with another value or with `null` in cases where
they want no value at all.

Last, in a few cases, the CQL Testing Framework allows test authors to use an alias
field name.  This is mainly useful for simplifying the data (e.g., allowing for `code`
rather than `medicationCodeableConcept`).

This documentation clearly indicates what the default patient reference field is,
what fields will be set with default values, and what aliases are allowed.

<a name="common"></a>
## Common Resources Types

The following list contains commonly used resource types for testing CQL-based CDS:

[AllergyIntolerance](#AllergyIntolerance) | [CarePlan](#CarePlan) | [Condition](#Condition) | [Device](#Device) | [DiagnosticReport](#DiagnosticReport) | [Encounter](#Encounter) | [FamilyMemberHistory](#FamilyMemberHistory) | [Goal](#Goal) | [Immunization](#Immunization) | [Medication](#Medication) | [MedicationAdministration](#MedicationAdministration) | [MedicationOrder](#MedicationOrder) | [MedicationStatement](#MedicationStatement) | [Observation](#Observation) | [Patient](#Patient) | [Procedure](#Procedure)

## All Resource Types

The following list contains all FHIR DSTU2 types:

[Account](#Account) | [AllergyIntolerance](#AllergyIntolerance) | [Appointment](#Appointment) | [AppointmentResponse](#AppointmentResponse) | [AuditEvent](#AuditEvent) | [Basic](#Basic) | [Binary](#Binary) | [BodySite](#BodySite) | [Bundle](#Bundle) | [CarePlan](#CarePlan) | [Claim](#Claim) | [ClaimResponse](#ClaimResponse) | [ClinicalImpression](#ClinicalImpression) | [Communication](#Communication) | [CommunicationRequest](#CommunicationRequest) | [Composition](#Composition) | [ConceptMap](#ConceptMap) | [Condition](#Condition) | [Conformance](#Conformance) | [Contract](#Contract) | [Coverage](#Coverage) | [DataElement](#DataElement) | [DetectedIssue](#DetectedIssue) | [Device](#Device) | [DeviceComponent](#DeviceComponent) | [DeviceMetric](#DeviceMetric) | [DeviceUseRequest](#DeviceUseRequest) | [DeviceUseStatement](#DeviceUseStatement) | [DiagnosticOrder](#DiagnosticOrder) | [DiagnosticReport](#DiagnosticReport) | [DocumentManifest](#DocumentManifest) | [DocumentReference](#DocumentReference) | [DomainResource](#DomainResource) | [EligibilityRequest](#EligibilityRequest) | [EligibilityResponse](#EligibilityResponse) | [Encounter](#Encounter) | [EnrollmentRequest](#EnrollmentRequest) | [EnrollmentResponse](#EnrollmentResponse) | [EpisodeOfCare](#EpisodeOfCare) | [ExplanationOfBenefit](#ExplanationOfBenefit) | [FamilyMemberHistory](#FamilyMemberHistory) | [Flag](#Flag) | [Goal](#Goal) | [Group](#Group) | [HealthcareService](#HealthcareService) | [ImagingObjectSelection](#ImagingObjectSelection) | [ImagingStudy](#ImagingStudy) | [Immunization](#Immunization) | [ImmunizationRecommendation](#ImmunizationRecommendation) | [ImplementationGuide](#ImplementationGuide) | [List](#List) | [Location](#Location) | [Media](#Media) | [Medication](#Medication) | [MedicationAdministration](#MedicationAdministration) | [MedicationDispense](#MedicationDispense) | [MedicationOrder](#MedicationOrder) | [MedicationStatement](#MedicationStatement) | [MessageHeader](#MessageHeader) | [NamingSystem](#NamingSystem) | [NutritionOrder](#NutritionOrder) | [Observation](#Observation) | [OperationDefinition](#OperationDefinition) | [OperationOutcome](#OperationOutcome) | [Order](#Order) | [OrderResponse](#OrderResponse) | [Organization](#Organization) | [Parameters](#Parameters) | [Patient](#Patient) | [PaymentNotice](#PaymentNotice) | [PaymentReconciliation](#PaymentReconciliation) | [Person](#Person) | [Practitioner](#Practitioner) | [Procedure](#Procedure) | [ProcedureRequest](#ProcedureRequest) | [ProcessRequest](#ProcessRequest) | [ProcessResponse](#ProcessResponse) | [Provenance](#Provenance) | [Questionnaire](#Questionnaire) | [QuestionnaireResponse](#QuestionnaireResponse) | [ReferralRequest](#ReferralRequest) | [RelatedPerson](#RelatedPerson) | [Resource](#Resource) | [RiskAssessment](#RiskAssessment) | [Schedule](#Schedule) | [SearchParameter](#SearchParameter) | [Slot](#Slot) | [Specimen](#Specimen) | [StructureDefinition](#StructureDefinition) | [Subscription](#Subscription) | [Substance](#Substance) | [SupplyDelivery](#SupplyDelivery) | [SupplyRequest](#SupplyRequest) | [TestScript](#TestScript) | [ValueSet](#ValueSet) | [VisionPrescription](#VisionPrescription)

<a name="Account"></a>
## Account

A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centres, etc.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Identifies the patient, device, practitioner, location or other object the account is associated with. |
| Default Value | status | Indicates whether the account is presently used/useable or not. <br /> **Default:** _active_ |


See the [Account FHIR Documentation](http://hl7.org/fhir/DSTU2/account.html) for the full list of
available fields, definitions, and allowable values.

<a name="AllergyIntolerance"></a>
## AllergyIntolerance

Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient who has the allergy or intolerance. |
| Default Value | status | Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified Substance. <br /> **Default:** _confirmed_ |


See the [AllergyIntolerance FHIR Documentation](http://hl7.org/fhir/DSTU2/allergyintolerance.html) for the full list of
available fields, definitions, and allowable values.

<a name="Appointment"></a>
## Appointment

A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status. <br /> **Default:** _booked_ |


See the [Appointment FHIR Documentation](http://hl7.org/fhir/DSTU2/appointment.html) for the full list of
available fields, definitions, and allowable values.

<a name="AppointmentResponse"></a>
## AppointmentResponse

A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | actor | A Person, Location/HealthcareService or Device that is participating in the appointment. |
| Default Value | participantStatus | Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty. <br /> **Default:** _accepted_ |


See the [AppointmentResponse FHIR Documentation](http://hl7.org/fhir/DSTU2/appointmentresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="AuditEvent"></a>
## AuditEvent

A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [AuditEvent FHIR Documentation](http://hl7.org/fhir/DSTU2/auditevent.html) for the full list of
available fields, definitions, and allowable values.

<a name="Basic"></a>
## Basic

Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Identifies the patient, practitioner, device or any other resource that is the "focus" of this resource. |


See the [Basic FHIR Documentation](http://hl7.org/fhir/DSTU2/basic.html) for the full list of
available fields, definitions, and allowable values.

<a name="Binary"></a>
## Binary

A binary resource can contain any content, whether text, image, pdf, zip archive, etc.



See the [Binary FHIR Documentation](http://hl7.org/fhir/DSTU2/binary.html) for the full list of
available fields, definitions, and allowable values.

<a name="BodySite"></a>
## BodySite

Record details about the anatomical location of a specimen or body part.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The person to which the body site belongs. |


See the [BodySite FHIR Documentation](http://hl7.org/fhir/DSTU2/bodysite.html) for the full list of
available fields, definitions, and allowable values.

<a name="Bundle"></a>
## Bundle

A container for a collection of resources.



See the [Bundle FHIR Documentation](http://hl7.org/fhir/DSTU2/bundle.html) for the full list of
available fields, definitions, and allowable values.

<a name="CarePlan"></a>
## CarePlan

Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Identifies the patient or group whose intended care is described by the plan. |
| Default Value | status | Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record. <br /> **Default:** _active_ |


See the [CarePlan FHIR Documentation](http://hl7.org/fhir/DSTU2/careplan.html) for the full list of
available fields, definitions, and allowable values.

<a name="Claim"></a>
## Claim

A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | Patient Resource. |


See the [Claim FHIR Documentation](http://hl7.org/fhir/DSTU2/claim.html) for the full list of
available fields, definitions, and allowable values.

<a name="ClaimResponse"></a>
## ClaimResponse

This resource provides the adjudication details from the processing of a Claim resource.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | outcome | Transaction status: error, complete. <br /> **Default:** _complete_ |


See the [ClaimResponse FHIR Documentation](http://hl7.org/fhir/DSTU2/claimresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="ClinicalImpression"></a>
## ClinicalImpression

A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient being assessed. |
| Default Value | status | Identifies the workflow status of the assessment. <br /> **Default:** _completed_ |


See the [ClinicalImpression FHIR Documentation](http://hl7.org/fhir/DSTU2/clinicalimpression.html) for the full list of
available fields, definitions, and allowable values.

<a name="Communication"></a>
## Communication

An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency was notified about a reportable condition.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient who was the focus of this communication. |
| Default Value | status | The status of the transmission. <br /> **Default:** _completed_ |


See the [Communication FHIR Documentation](http://hl7.org/fhir/DSTU2/communication.html) for the full list of
available fields, definitions, and allowable values.

<a name="CommunicationRequest"></a>
## CommunicationRequest

A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient who is the focus of this communication request. |
| Default Value | status | The status of the proposal or order. <br /> **Default:** _accepted_ |


See the [CommunicationRequest FHIR Documentation](http://hl7.org/fhir/DSTU2/communicationrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="Composition"></a>
## Composition

A set of healthcare-related information that is assembled together into a single logical document that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. While a Composition defines the structure, it does not actually contain the content: rather the full content of a document is contained in a Bundle, of which the Composition is the first resource contained.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure). |
| Default Value | status | The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document. <br /> **Default:** _final_ |


See the [Composition FHIR Documentation](http://hl7.org/fhir/DSTU2/composition.html) for the full list of
available fields, definitions, and allowable values.

<a name="ConceptMap"></a>
## ConceptMap

A statement of relationships from one set of concepts to one or more other concepts - either code systems or data elements, or classes in class models.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the concept map. <br /> **Default:** _active_ |


See the [ConceptMap FHIR Documentation](http://hl7.org/fhir/DSTU2/conceptmap.html) for the full list of
available fields, definitions, and allowable values.

<a name="Condition"></a>
## Condition

Use to record detailed information about conditions, problems or diagnoses recognized by a clinician. There are many uses including: recording a diagnosis during an encounter; populating a problem list or a summary statement, such as a discharge summary.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | Indicates the patient who the condition record is associated with. |
| Default Value | clinicalStatus | The clinical status of the condition. <br /> **Default:** _resolved_ when _abatementDateTime_ has a value; _active_ otherwise |
| Default Value | verificationStatus | The verification status to support the clinical status of the condition. <br /> **Default:** _confirmed_ |


See the [Condition FHIR Documentation](http://hl7.org/fhir/DSTU2/condition.html) for the full list of
available fields, definitions, and allowable values.

<a name="Conformance"></a>
## Conformance

A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this conformance statement. <br /> **Default:** _active_ |


See the [Conformance FHIR Documentation](http://hl7.org/fhir/DSTU2/conformance.html) for the full list of
available fields, definitions, and allowable values.

<a name="Contract"></a>
## Contract

A formal agreement between parties regarding the conduct of business, exchange of information or other matters.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [Contract FHIR Documentation](http://hl7.org/fhir/DSTU2/contract.html) for the full list of
available fields, definitions, and allowable values.

<a name="Coverage"></a>
## Coverage

Financial instrument which may be used to pay for or reimburse health care products and services.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subscriber | The party who 'owns' the insurance contractual relationship to the policy or to whom the benefit of the policy is due. |


See the [Coverage FHIR Documentation](http://hl7.org/fhir/DSTU2/coverage.html) for the full list of
available fields, definitions, and allowable values.

<a name="DataElement"></a>
## DataElement

The formal description of a single piece of information that can be gathered and reported.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the data element. <br /> **Default:** _active_ |


See the [DataElement FHIR Documentation](http://hl7.org/fhir/DSTU2/dataelement.html) for the full list of
available fields, definitions, and allowable values.

<a name="DetectedIssue"></a>
## DetectedIssue

Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | Indicates the patient whose record the detected issue is associated with. |


See the [DetectedIssue FHIR Documentation](http://hl7.org/fhir/DSTU2/detectedissue.html) for the full list of
available fields, definitions, and allowable values.

<a name="Device"></a>
## Device

This resource identifies an instance of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices includes durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non-medical devices may include items such as a machine, cellphone, computer, application, etc.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | Patient information, if the resource is affixed to a person. |
| Default Value | status | Status of the Device availability. <br /> **Default:** _available_ |


See the [Device FHIR Documentation](http://hl7.org/fhir/DSTU2/device.html) for the full list of
available fields, definitions, and allowable values.

<a name="DeviceComponent"></a>
## DeviceComponent

Describes the characteristics, operational status and capabilities of a medical-related component of a medical device.



See the [DeviceComponent FHIR Documentation](http://hl7.org/fhir/DSTU2/devicecomponent.html) for the full list of
available fields, definitions, and allowable values.

<a name="DeviceMetric"></a>
## DeviceMetric

Describes a measurement, calculation or setting capability of a medical device.



See the [DeviceMetric FHIR Documentation](http://hl7.org/fhir/DSTU2/devicemetric.html) for the full list of
available fields, definitions, and allowable values.

<a name="DeviceUseRequest"></a>
## DeviceUseRequest

Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient who will use the device. |
| Default Value | status | The status of the request. <br /> **Default:** _accepted_ |


See the [DeviceUseRequest FHIR Documentation](http://hl7.org/fhir/DSTU2/deviceuserequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="DeviceUseStatement"></a>
## DeviceUseStatement

A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient who used the device. |


See the [DeviceUseStatement FHIR Documentation](http://hl7.org/fhir/DSTU2/deviceusestatement.html) for the full list of
available fields, definitions, and allowable values.

<a name="DiagnosticOrder"></a>
## DiagnosticOrder

A record of a request for a diagnostic investigation service to be performed.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Who or what the investigation is to be performed on. This is usually a human patient, but diagnostic tests can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans). |
| Default Value | status | The status of the order. <br /> **Default:** _accepted_ |


See the [DiagnosticOrder FHIR Documentation](http://hl7.org/fhir/DSTU2/diagnosticorder.html) for the full list of
available fields, definitions, and allowable values.

<a name="DiagnosticReport"></a>
## DiagnosticReport

The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources. |
| Default Value | status | The status of the diagnostic report as a whole. <br /> **Default:** _final_ |


See the [DiagnosticReport FHIR Documentation](http://hl7.org/fhir/DSTU2/diagnosticreport.html) for the full list of
available fields, definitions, and allowable values.

<a name="DocumentManifest"></a>
## DocumentManifest

A manifest that defines a set of documents.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case). |
| Default Value | status | The status of this document manifest. <br /> **Default:** _current_ |


See the [DocumentManifest FHIR Documentation](http://hl7.org/fhir/DSTU2/documentmanifest.html) for the full list of
available fields, definitions, and allowable values.

<a name="DocumentReference"></a>
## DocumentReference

A reference to a document .


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). |
| Default Value | status | The status of this document reference. <br /> **Default:** _current_ |
| Default Value | docStatus | The status of the underlying document. <br /> **Default:** _http://hl7.org/fhir/composition-status#final Final_ |


See the [DocumentReference FHIR Documentation](http://hl7.org/fhir/DSTU2/documentreference.html) for the full list of
available fields, definitions, and allowable values.

<a name="DomainResource"></a>
## DomainResource

A resource that includes narrative, extensions, and contained resources.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [DomainResource FHIR Documentation](http://hl7.org/fhir/DSTU2/domainresource.html) for the full list of
available fields, definitions, and allowable values.

<a name="EligibilityRequest"></a>
## EligibilityRequest

This resource provides the insurance eligibility details from the insurer regarding a specified coverage and optionally some class of service.



See the [EligibilityRequest FHIR Documentation](http://hl7.org/fhir/DSTU2/eligibilityrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="EligibilityResponse"></a>
## EligibilityResponse

This resource provides eligibility and plan details from the processing of an Eligibility resource.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | outcome | Transaction status: error, complete. <br /> **Default:** _complete_ |


See the [EligibilityResponse FHIR Documentation](http://hl7.org/fhir/DSTU2/eligibilityresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="Encounter"></a>
## Encounter

An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient present at the encounter. |
| Default Value | status | planned | arrived | in-progress | onleave | finished | cancelled. <br /> **Default:** _finished_ |


See the [Encounter FHIR Documentation](http://hl7.org/fhir/DSTU2/encounter.html) for the full list of
available fields, definitions, and allowable values.

<a name="EnrollmentRequest"></a>
## EnrollmentRequest

This resource provides the insurance enrollment details to the insurer regarding a specified coverage.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Patient Resource. |


See the [EnrollmentRequest FHIR Documentation](http://hl7.org/fhir/DSTU2/enrollmentrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="EnrollmentResponse"></a>
## EnrollmentResponse

This resource provides enrollment and plan details from the processing of an Enrollment resource.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | outcome | Transaction status: error, complete. <br /> **Default:** _complete_ |


See the [EnrollmentResponse FHIR Documentation](http://hl7.org/fhir/DSTU2/enrollmentresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="EpisodeOfCare"></a>
## EpisodeOfCare

An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient that this EpisodeOfCare applies to. |
| Default Value | status | planned | waitlist | active | onhold | finished | cancelled. <br /> **Default:** _finished_ |


See the [EpisodeOfCare FHIR Documentation](http://hl7.org/fhir/DSTU2/episodeofcare.html) for the full list of
available fields, definitions, and allowable values.

<a name="ExplanationOfBenefit"></a>
## ExplanationOfBenefit

This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | outcome | Transaction status: error, complete. <br /> **Default:** _complete_ |


See the [ExplanationOfBenefit FHIR Documentation](http://hl7.org/fhir/DSTU2/explanationofbenefit.html) for the full list of
available fields, definitions, and allowable values.

<a name="FamilyMemberHistory"></a>
## FamilyMemberHistory

Significant health events and conditions for a person related to the patient relevant in the context of care for the patient.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The person who this history concerns. |
| Default Value | status | A code specifying a state of a Family Member History record. <br /> **Default:** _completed_ |
| Default Value | name | This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair". <br /> **Default:** _Unknown_ |


See the [FamilyMemberHistory FHIR Documentation](http://hl7.org/fhir/DSTU2/familymemberhistory.html) for the full list of
available fields, definitions, and allowable values.

<a name="Flag"></a>
## Flag

Prospective warnings of potential issues when providing care to the patient.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient, location, group , organization , or practitioner this is about record this flag is associated with. |
| Default Value | status | Supports basic workflow. <br /> **Default:** _active_ |


See the [Flag FHIR Documentation](http://hl7.org/fhir/DSTU2/flag.html) for the full list of
available fields, definitions, and allowable values.

<a name="Goal"></a>
## Goal

Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Identifies the patient, group or organization for whom the goal is being established. |
| Default Value | status | Indicates whether the goal has been reached and is still considered relevant. <br /> **Default:** _achieved_ when _outcome_ has a value; _in-progress_ otherwise |


See the [Goal FHIR Documentation](http://hl7.org/fhir/DSTU2/goal.html) for the full list of
available fields, definitions, and allowable values.

<a name="Group"></a>
## Group

Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.



See the [Group FHIR Documentation](http://hl7.org/fhir/DSTU2/group.html) for the full list of
available fields, definitions, and allowable values.

<a name="HealthcareService"></a>
## HealthcareService

The details of a healthcare service available at a location.



See the [HealthcareService FHIR Documentation](http://hl7.org/fhir/DSTU2/healthcareservice.html) for the full list of
available fields, definitions, and allowable values.

<a name="ImagingObjectSelection"></a>
## ImagingObjectSelection

A manifest of a set of DICOM Service-Object Pair Instances (SOP Instances).  The referenced SOP Instances (images or other content) are for a single patient, and may be from one or more studies. The referenced SOP Instances have been selected for a purpose, such as quality assurance, conference, or consult. Reflecting that range of purposes, typical ImagingObjectSelection resources may include all SOP Instances in a study (perhaps for sharing through a Health Information Exchange); key images from multiple studies (for reference by a referring or treating physician); a multi-frame ultrasound instance ("cine" video clip) and a set of measurements taken from that instance (for inclusion in a teaching file); and so on.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | A patient resource reference which is the patient subject of all DICOM SOP Instances in this ImagingObjectSelection. |


See the [ImagingObjectSelection FHIR Documentation](http://hl7.org/fhir/DSTU2/imagingobjectselection.html) for the full list of
available fields, definitions, and allowable values.

<a name="ImagingStudy"></a>
## ImagingStudy

Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient imaged in the study. |


See the [ImagingStudy FHIR Documentation](http://hl7.org/fhir/DSTU2/imagingstudy.html) for the full list of
available fields, definitions, and allowable values.

<a name="Immunization"></a>
## Immunization

Describes the event of a patient being administered a vaccination or a record of a vaccination as reported by a patient, a clinician or another party and may include vaccine reaction information and what vaccination protocol was followed.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient who either received or did not receive the immunization. |
| Default Value | status | Indicates the current status of the vaccination event. <br /> **Default:** _completed_ |
| Default Value | wasNotGiven | Indicates if the vaccination was or was not given. <br /> **Default:** _false_ |
| Default Value | reported | True if this administration was reported rather than directly administered. <br /> **Default:** _false_ |


See the [Immunization FHIR Documentation](http://hl7.org/fhir/DSTU2/immunization.html) for the full list of
available fields, definitions, and allowable values.

<a name="ImmunizationRecommendation"></a>
## ImmunizationRecommendation

A patient's point-in-time immunization and recommendation (i.e. forecasting a patient's immunization eligibility according to a published schedule) with optional supporting justification.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient for whom the recommendations are for. |


See the [ImmunizationRecommendation FHIR Documentation](http://hl7.org/fhir/DSTU2/immunizationrecommendation.html) for the full list of
available fields, definitions, and allowable values.

<a name="ImplementationGuide"></a>
## ImplementationGuide

A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the Implementation Guide. <br /> **Default:** _active_ |


See the [ImplementationGuide FHIR Documentation](http://hl7.org/fhir/DSTU2/implementationguide.html) for the full list of
available fields, definitions, and allowable values.

<a name="List"></a>
## List

A set of information summarized from a list of other resources.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The common subject (or patient) of the resources that are in the list, if there is one. |
| Default Value | status | Indicates the current state of this list. <br /> **Default:** _current_ |
| Default Value | mode | How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted. <br /> **Default:** _working_ |


See the [List FHIR Documentation](http://hl7.org/fhir/DSTU2/list.html) for the full list of
available fields, definitions, and allowable values.

<a name="Location"></a>
## Location

Details and position information for a physical place where services are provided  and resources and participants may be stored, found, contained or accommodated.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | active | suspended | inactive. <br /> **Default:** _active_ |


See the [Location FHIR Documentation](http://hl7.org/fhir/DSTU2/location.html) for the full list of
available fields, definitions, and allowable values.

<a name="Media"></a>
## Media

A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Who/What this Media is a record of. |


See the [Media FHIR Documentation](http://hl7.org/fhir/DSTU2/media.html) for the full list of
available fields, definitions, and allowable values.

<a name="Medication"></a>
## Medication

This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.



See the [Medication FHIR Documentation](http://hl7.org/fhir/DSTU2/medication.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicationAdministration"></a>
## MedicationAdministration

Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The person or animal receiving the medication. |
| Default Value | status | Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way. <br /> **Default:** _completed_ |
| Default Value | wasNotGiven | Set this to true if the record is saying that the medication was NOT administered. <br /> **Default:** _false_ |
| Alias | code | Alias for _medicationCodeableConcept_.|


See the [MedicationAdministration FHIR Documentation](http://hl7.org/fhir/DSTU2/medicationadministration.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicationDispense"></a>
## MedicationDispense

Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | A link to a resource representing the person to whom the medication will be given. |
| Default Value | status | A code specifying the state of the set of dispense events. <br /> **Default:** _completed_ |
| Alias | code | Alias for _medicationCodeableConcept_.|


See the [MedicationDispense FHIR Documentation](http://hl7.org/fhir/DSTU2/medicationdispense.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicationOrder"></a>
## MedicationOrder

An order for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationOrder" rather than "MedicationPrescription" to generalize the use across inpatient and outpatient settings as well as for care plans, etc.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | A link to a resource representing the person to whom the medication will be given. |
| Default Value | status | A code specifying the state of the order.  Generally this will be active or completed state. <br /> **Default:** _active_ |
| Alias | code | Alias for _medicationCodeableConcept_.|


See the [MedicationOrder FHIR Documentation](http://hl7.org/fhir/DSTU2/medicationorder.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicationStatement"></a>
## MedicationStatement

A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now, or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from e.g. the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The person or animal who is/was taking the medication. |
| Default Value | status | A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally this will be active or completed. <br /> **Default:** _active_ |
| Default Value | wasNotTaken | Set this to true if the record is saying that the medication was NOT taken. <br /> **Default:** _false_ |
| Alias | code | Alias for _medicationCodeableConcept_.|


See the [MedicationStatement FHIR Documentation](http://hl7.org/fhir/DSTU2/medicationstatement.html) for the full list of
available fields, definitions, and allowable values.

<a name="MessageHeader"></a>
## MessageHeader

The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.



See the [MessageHeader FHIR Documentation](http://hl7.org/fhir/DSTU2/messageheader.html) for the full list of
available fields, definitions, and allowable values.

<a name="NamingSystem"></a>
## NamingSystem

A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | Indicates whether the naming system is "ready for use" or not. <br /> **Default:** _active_ |


See the [NamingSystem FHIR Documentation](http://hl7.org/fhir/DSTU2/namingsystem.html) for the full list of
available fields, definitions, and allowable values.

<a name="NutritionOrder"></a>
## NutritionOrder

A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding. |
| Default Value | status | The workflow status of the nutrition order/request. <br /> **Default:** _active_ |


See the [NutritionOrder FHIR Documentation](http://hl7.org/fhir/DSTU2/nutritionorder.html) for the full list of
available fields, definitions, and allowable values.

<a name="Observation"></a>
## Observation

Measurements and simple assertions made about a patient, device or other subject.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient, or group of patients, location, or device whose characteristics (direct or indirect) are described by the observation and into whose record the observation is placed.  Comments: Indirect characteristics may be those of a specimen, fetus, donor,  other observer (for example a relative or EMT), or any observation made about the subject. |
| Default Value | status | The status of the result value. <br /> **Default:** _final_ |


See the [Observation FHIR Documentation](http://hl7.org/fhir/DSTU2/observation.html) for the full list of
available fields, definitions, and allowable values.

<a name="OperationDefinition"></a>
## OperationDefinition

A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the profile. <br /> **Default:** _active_ |


See the [OperationDefinition FHIR Documentation](http://hl7.org/fhir/DSTU2/operationdefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="OperationOutcome"></a>
## OperationOutcome

A collection of error, warning or information messages that result from a system action.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [OperationOutcome FHIR Documentation](http://hl7.org/fhir/DSTU2/operationoutcome.html) for the full list of
available fields, definitions, and allowable values.

<a name="Order"></a>
## Order

A request to perform an action.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Patient this order is about. |


See the [Order FHIR Documentation](http://hl7.org/fhir/DSTU2/order.html) for the full list of
available fields, definitions, and allowable values.

<a name="OrderResponse"></a>
## OrderResponse

A response to an order.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | orderStatus | What this response says about the status of the original order. <br /> **Default:** _completed_ |


See the [OrderResponse FHIR Documentation](http://hl7.org/fhir/DSTU2/orderresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="Organization"></a>
## Organization

A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, etc.



See the [Organization FHIR Documentation](http://hl7.org/fhir/DSTU2/organization.html) for the full list of
available fields, definitions, and allowable values.

<a name="Parameters"></a>
## Parameters

This special resource type is used to represent an operation request and response (operations.html). It has no other use, and there is no RESTful endpoint associated with it.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [Parameters FHIR Documentation](http://hl7.org/fhir/DSTU2/parameters.html) for the full list of
available fields, definitions, and allowable values.

<a name="Patient"></a>
## Patient

Demographics and other administrative information about an individual or animal receiving care or other health-related services.



See the [Patient FHIR Documentation](http://hl7.org/fhir/DSTU2/patient.html) for the full list of
available fields, definitions, and allowable values.

<a name="PaymentNotice"></a>
## PaymentNotice

This resource provides the status of the payment for goods and services rendered, and the request and response resource references.



See the [PaymentNotice FHIR Documentation](http://hl7.org/fhir/DSTU2/paymentnotice.html) for the full list of
available fields, definitions, and allowable values.

<a name="PaymentReconciliation"></a>
## PaymentReconciliation

This resource provides payment details and claim references supporting a bulk payment.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | outcome | Transaction status: error, complete. <br /> **Default:** _complete_ |


See the [PaymentReconciliation FHIR Documentation](http://hl7.org/fhir/DSTU2/paymentreconciliation.html) for the full list of
available fields, definitions, and allowable values.

<a name="Person"></a>
## Person

Demographics and administrative information about a person independent of a specific health-related context.



See the [Person FHIR Documentation](http://hl7.org/fhir/DSTU2/person.html) for the full list of
available fields, definitions, and allowable values.

<a name="Practitioner"></a>
## Practitioner

A person who is directly or indirectly involved in the provisioning of healthcare.



See the [Practitioner FHIR Documentation](http://hl7.org/fhir/DSTU2/practitioner.html) for the full list of
available fields, definitions, and allowable values.

<a name="Procedure"></a>
## Procedure

An action that is or was performed on a patient. This can be a physical intervention like an operation, or less invasive like counseling or hypnotherapy.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The person, animal or group on which the procedure was performed. |
| Default Value | status | A code specifying the state of the procedure. Generally this will be in-progress or completed state. <br /> **Default:** _completed_ |
| Default Value | notPerformed | Set this to true if the record is saying that the procedure was NOT performed. <br /> **Default:** _false_ |


See the [Procedure FHIR Documentation](http://hl7.org/fhir/DSTU2/procedure.html) for the full list of
available fields, definitions, and allowable values.

<a name="ProcedureRequest"></a>
## ProcedureRequest

A request for a procedure to be performed. May be a proposal or an order.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The person, animal or group that should receive the procedure. |
| Default Value | status | The status of the order. <br /> **Default:** _accepted_ |


See the [ProcedureRequest FHIR Documentation](http://hl7.org/fhir/DSTU2/procedurerequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="ProcessRequest"></a>
## ProcessRequest

This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources.



See the [ProcessRequest FHIR Documentation](http://hl7.org/fhir/DSTU2/processrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="ProcessResponse"></a>
## ProcessResponse

This resource provides processing status, errors and notes from the processing of a resource.



See the [ProcessResponse FHIR Documentation](http://hl7.org/fhir/DSTU2/processresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="Provenance"></a>
## Provenance

Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.



See the [Provenance FHIR Documentation](http://hl7.org/fhir/DSTU2/provenance.html) for the full list of
available fields, definitions, and allowable values.

<a name="Questionnaire"></a>
## Questionnaire

A structured set of questions intended to guide the collection of answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The lifecycle status of the questionnaire as a whole. <br /> **Default:** _published_ |


See the [Questionnaire FHIR Documentation](http://hl7.org/fhir/DSTU2/questionnaire.html) for the full list of
available fields, definitions, and allowable values.

<a name="QuestionnaireResponse"></a>
## QuestionnaireResponse

A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the underlying questions.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information. |
| Default Value | status | The lifecycle status of the questionnaire response as a whole. <br /> **Default:** _completed_ |


See the [QuestionnaireResponse FHIR Documentation](http://hl7.org/fhir/DSTU2/questionnaireresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="ReferralRequest"></a>
## ReferralRequest

Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organization.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient who is the subject of a referral or transfer of care request. |
| Default Value | status | The workflow status of the referral or transfer of care request. <br /> **Default:** _accepted_ |


See the [ReferralRequest FHIR Documentation](http://hl7.org/fhir/DSTU2/referralrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="RelatedPerson"></a>
## RelatedPerson

Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient this person is related to. |


See the [RelatedPerson FHIR Documentation](http://hl7.org/fhir/DSTU2/relatedperson.html) for the full list of
available fields, definitions, and allowable values.

<a name="Resource"></a>
## Resource

This is the base resource type for everything.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [Resource FHIR Documentation](http://hl7.org/fhir/DSTU2/resource.html) for the full list of
available fields, definitions, and allowable values.

<a name="RiskAssessment"></a>
## RiskAssessment

An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient or group the risk assessment applies to. |


See the [RiskAssessment FHIR Documentation](http://hl7.org/fhir/DSTU2/riskassessment.html) for the full list of
available fields, definitions, and allowable values.

<a name="Schedule"></a>
## Schedule

A container for slot(s) of time that may be available for booking appointments.



See the [Schedule FHIR Documentation](http://hl7.org/fhir/DSTU2/schedule.html) for the full list of
available fields, definitions, and allowable values.

<a name="SearchParameter"></a>
## SearchParameter

A search parameter that defines a named search item that can be used to search/filter on a resource.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this search parameter definition. <br /> **Default:** _active_ |


See the [SearchParameter FHIR Documentation](http://hl7.org/fhir/DSTU2/searchparameter.html) for the full list of
available fields, definitions, and allowable values.

<a name="Slot"></a>
## Slot

A slot of time on a schedule that may be available for booking appointments.



See the [Slot FHIR Documentation](http://hl7.org/fhir/DSTU2/slot.html) for the full list of
available fields, definitions, and allowable values.

<a name="Specimen"></a>
## Specimen

A sample to be used for analysis.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Where the specimen came from. This may be from the patient(s) or from the environment or a device. |
| Default Value | status | The availability of the specimen. <br /> **Default:** _available_ |


See the [Specimen FHIR Documentation](http://hl7.org/fhir/DSTU2/specimen.html) for the full list of
available fields, definitions, and allowable values.

<a name="StructureDefinition"></a>
## StructureDefinition

A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the StructureDefinition. <br /> **Default:** _active_ |


See the [StructureDefinition FHIR Documentation](http://hl7.org/fhir/DSTU2/structuredefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="Subscription"></a>
## Subscription

The subscription resource is used to define a push based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system is able to take an appropriate action.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the subscription, which marks the server state for managing the subscription. <br /> **Default:** _active_ |


See the [Subscription FHIR Documentation](http://hl7.org/fhir/DSTU2/subscription.html) for the full list of
available fields, definitions, and allowable values.

<a name="Substance"></a>
## Substance

A homogeneous material with a definite composition.



See the [Substance FHIR Documentation](http://hl7.org/fhir/DSTU2/substance.html) for the full list of
available fields, definitions, and allowable values.

<a name="SupplyDelivery"></a>
## SupplyDelivery

Record of delivery of what is supplied.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | A link to a resource representing the person whom the delivered item is for. |
| Default Value | status | A code specifying the state of the dispense event. <br /> **Default:** _completed_ |


See the [SupplyDelivery FHIR Documentation](http://hl7.org/fhir/DSTU2/supplydelivery.html) for the full list of
available fields, definitions, and allowable values.

<a name="SupplyRequest"></a>
## SupplyRequest

A record of a request for a medication, substance or device used in the healthcare setting.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | A link to a resource representing the person whom the ordered item is for. |
| Default Value | status | Status of the supply request. <br /> **Default:** _completed_ |


See the [SupplyRequest FHIR Documentation](http://hl7.org/fhir/DSTU2/supplyrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="TestScript"></a>
## TestScript

TestScript is a resource that specifies a suite of tests against a FHIR server implementation to determine compliance against the FHIR specification.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the TestScript. <br /> **Default:** _active_ |


See the [TestScript FHIR Documentation](http://hl7.org/fhir/DSTU2/testscript.html) for the full list of
available fields, definitions, and allowable values.

<a name="ValueSet"></a>
## ValueSet

A value set specifies a set of codes drawn from one or more code systems.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the value set. <br /> **Default:** _active_ |


See the [ValueSet FHIR Documentation](http://hl7.org/fhir/DSTU2/valueset.html) for the full list of
available fields, definitions, and allowable values.

<a name="VisionPrescription"></a>
## VisionPrescription

An authorization for the supply of glasses and/or contact lenses to a patient.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | A link to a resource representing the person to whom the vision products will be supplied. |


See the [VisionPrescription FHIR Documentation](http://hl7.org/fhir/DSTU2/visionprescription.html) for the full list of
available fields, definitions, and allowable values.
