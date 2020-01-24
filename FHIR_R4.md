
# FHIR R4 Resources

The CQL Testing framework supports all FHIR R4 resource types.
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

[AllergyIntolerance](#AllergyIntolerance) | [CarePlan](#CarePlan) | [Condition](#Condition) | [Device](#Device) | [DiagnosticReport](#DiagnosticReport) | [Encounter](#Encounter) | [FamilyMemberHistory](#FamilyMemberHistory) | [Goal](#Goal) | [Immunization](#Immunization) | [Medication](#Medication) | [MedicationAdministration](#MedicationAdministration) | [MedicationRequest](#MedicationRequest) | [MedicationStatement](#MedicationStatement) | [Observation](#Observation) | [Patient](#Patient) | [PractitionerRole](#PractitionerRole) | [Procedure](#Procedure)

## All Resource Types

The following list contains all FHIR R4 types:

[Account](#Account) | [ActivityDefinition](#ActivityDefinition) | [AdverseEvent](#AdverseEvent) | [AllergyIntolerance](#AllergyIntolerance) | [Appointment](#Appointment) | [AppointmentResponse](#AppointmentResponse) | [AuditEvent](#AuditEvent) | [Basic](#Basic) | [Binary](#Binary) | [BiologicallyDerivedProduct](#BiologicallyDerivedProduct) | [BodyStructure](#BodyStructure) | [Bundle](#Bundle) | [CapabilityStatement](#CapabilityStatement) | [CarePlan](#CarePlan) | [CareTeam](#CareTeam) | [CatalogEntry](#CatalogEntry) | [ChargeItem](#ChargeItem) | [ChargeItemDefinition](#ChargeItemDefinition) | [Claim](#Claim) | [ClaimResponse](#ClaimResponse) | [ClinicalImpression](#ClinicalImpression) | [CodeSystem](#CodeSystem) | [Communication](#Communication) | [CommunicationRequest](#CommunicationRequest) | [CompartmentDefinition](#CompartmentDefinition) | [Composition](#Composition) | [ConceptMap](#ConceptMap) | [Condition](#Condition) | [Consent](#Consent) | [Contract](#Contract) | [Coverage](#Coverage) | [CoverageEligibilityRequest](#CoverageEligibilityRequest) | [CoverageEligibilityResponse](#CoverageEligibilityResponse) | [DetectedIssue](#DetectedIssue) | [Device](#Device) | [DeviceDefinition](#DeviceDefinition) | [DeviceMetric](#DeviceMetric) | [DeviceRequest](#DeviceRequest) | [DeviceUseStatement](#DeviceUseStatement) | [DiagnosticReport](#DiagnosticReport) | [DocumentManifest](#DocumentManifest) | [DocumentReference](#DocumentReference) | [DomainResource](#DomainResource) | [EffectEvidenceSynthesis](#EffectEvidenceSynthesis) | [Encounter](#Encounter) | [Endpoint](#Endpoint) | [EnrollmentRequest](#EnrollmentRequest) | [EnrollmentResponse](#EnrollmentResponse) | [EpisodeOfCare](#EpisodeOfCare) | [EventDefinition](#EventDefinition) | [Evidence](#Evidence) | [EvidenceVariable](#EvidenceVariable) | [ExampleScenario](#ExampleScenario) | [ExplanationOfBenefit](#ExplanationOfBenefit) | [FamilyMemberHistory](#FamilyMemberHistory) | [Flag](#Flag) | [Goal](#Goal) | [GraphDefinition](#GraphDefinition) | [Group](#Group) | [GuidanceResponse](#GuidanceResponse) | [HealthcareService](#HealthcareService) | [ImagingStudy](#ImagingStudy) | [Immunization](#Immunization) | [ImmunizationEvaluation](#ImmunizationEvaluation) | [ImmunizationRecommendation](#ImmunizationRecommendation) | [ImplementationGuide](#ImplementationGuide) | [InsurancePlan](#InsurancePlan) | [Invoice](#Invoice) | [Library](#Library) | [Linkage](#Linkage) | [List](#List) | [Location](#Location) | [Measure](#Measure) | [MeasureReport](#MeasureReport) | [Media](#Media) | [Medication](#Medication) | [MedicationAdministration](#MedicationAdministration) | [MedicationDispense](#MedicationDispense) | [MedicationKnowledge](#MedicationKnowledge) | [MedicationRequest](#MedicationRequest) | [MedicationStatement](#MedicationStatement) | [MedicinalProduct](#MedicinalProduct) | [MedicinalProductAuthorization](#MedicinalProductAuthorization) | [MedicinalProductContraindication](#MedicinalProductContraindication) | [MedicinalProductIndication](#MedicinalProductIndication) | [MedicinalProductIngredient](#MedicinalProductIngredient) | [MedicinalProductInteraction](#MedicinalProductInteraction) | [MedicinalProductManufactured](#MedicinalProductManufactured) | [MedicinalProductPackaged](#MedicinalProductPackaged) | [MedicinalProductPharmaceutical](#MedicinalProductPharmaceutical) | [MedicinalProductUndesirableEffect](#MedicinalProductUndesirableEffect) | [MessageDefinition](#MessageDefinition) | [MessageHeader](#MessageHeader) | [MolecularSequence](#MolecularSequence) | [NamingSystem](#NamingSystem) | [NutritionOrder](#NutritionOrder) | [Observation](#Observation) | [ObservationDefinition](#ObservationDefinition) | [OperationDefinition](#OperationDefinition) | [OperationOutcome](#OperationOutcome) | [Organization](#Organization) | [OrganizationAffiliation](#OrganizationAffiliation) | [Parameters](#Parameters) | [Patient](#Patient) | [PaymentNotice](#PaymentNotice) | [PaymentReconciliation](#PaymentReconciliation) | [Person](#Person) | [PlanDefinition](#PlanDefinition) | [Practitioner](#Practitioner) | [PractitionerRole](#PractitionerRole) | [Procedure](#Procedure) | [Provenance](#Provenance) | [Questionnaire](#Questionnaire) | [QuestionnaireResponse](#QuestionnaireResponse) | [RelatedPerson](#RelatedPerson) | [RequestGroup](#RequestGroup) | [ResearchDefinition](#ResearchDefinition) | [ResearchElementDefinition](#ResearchElementDefinition) | [ResearchStudy](#ResearchStudy) | [ResearchSubject](#ResearchSubject) | [Resource](#Resource) | [RiskAssessment](#RiskAssessment) | [RiskEvidenceSynthesis](#RiskEvidenceSynthesis) | [Schedule](#Schedule) | [SearchParameter](#SearchParameter) | [ServiceRequest](#ServiceRequest) | [Slot](#Slot) | [Specimen](#Specimen) | [SpecimenDefinition](#SpecimenDefinition) | [StructureDefinition](#StructureDefinition) | [StructureMap](#StructureMap) | [Subscription](#Subscription) | [Substance](#Substance) | [SubstanceNucleicAcid](#SubstanceNucleicAcid) | [SubstancePolymer](#SubstancePolymer) | [SubstanceProtein](#SubstanceProtein) | [SubstanceReferenceInformation](#SubstanceReferenceInformation) | [SubstanceSourceMaterial](#SubstanceSourceMaterial) | [SubstanceSpecification](#SubstanceSpecification) | [SupplyDelivery](#SupplyDelivery) | [SupplyRequest](#SupplyRequest) | [Task](#Task) | [TerminologyCapabilities](#TerminologyCapabilities) | [TestReport](#TestReport) | [TestScript](#TestScript) | [ValueSet](#ValueSet) | [VerificationResult](#VerificationResult) | [VisionPrescription](#VisionPrescription)

<a name="Account"></a>
## Account

A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Identifies the entity which incurs the expenses. While the immediate recipients of services or goods might be entities related to the subject, the expenses were ultimately incurred by the subject of the Account. |
| Default Value | status | Indicates whether the account is presently used/usable or not. <br /> **Default:** _active_ |


See the [Account FHIR Documentation](http://hl7.org/fhir/R4/account.html) for the full list of
available fields, definitions, and allowable values.

<a name="ActivityDefinition"></a>
## ActivityDefinition

This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this activity definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [ActivityDefinition FHIR Documentation](http://hl7.org/fhir/R4/activitydefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="AdverseEvent"></a>
## AdverseEvent

Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | This subject or group impacted by the event. |
| Default Value | actuality | Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely. <br /> **Default:** _actual_ |


See the [AdverseEvent FHIR Documentation](http://hl7.org/fhir/R4/adverseevent.html) for the full list of
available fields, definitions, and allowable values.

<a name="AllergyIntolerance"></a>
## AllergyIntolerance

Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient who has the allergy or intolerance. |
| Default Value | clinicalStatus | The clinical status of the allergy or intolerance. <br /> **Default:** _active_ |
| Default Value | verificationStatus | Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product). <br /> **Default:** _confirmed_ |


See the [AllergyIntolerance FHIR Documentation](http://hl7.org/fhir/R4/allergyintolerance.html) for the full list of
available fields, definitions, and allowable values.

<a name="Appointment"></a>
## Appointment

A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status. <br /> **Default:** _booked_ |


See the [Appointment FHIR Documentation](http://hl7.org/fhir/R4/appointment.html) for the full list of
available fields, definitions, and allowable values.

<a name="AppointmentResponse"></a>
## AppointmentResponse

A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | actor | A Person, Location, HealthcareService, or Device that is participating in the appointment. |
| Default Value | participantStatus | Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty. <br /> **Default:** _accepted_ |


See the [AppointmentResponse FHIR Documentation](http://hl7.org/fhir/R4/appointmentresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="AuditEvent"></a>
## AuditEvent

A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [AuditEvent FHIR Documentation](http://hl7.org/fhir/R4/auditevent.html) for the full list of
available fields, definitions, and allowable values.

<a name="Basic"></a>
## Basic

Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Identifies the patient, practitioner, device or any other resource that is the "focus" of this resource. |


See the [Basic FHIR Documentation](http://hl7.org/fhir/R4/basic.html) for the full list of
available fields, definitions, and allowable values.

<a name="Binary"></a>
## Binary

A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.



See the [Binary FHIR Documentation](http://hl7.org/fhir/R4/binary.html) for the full list of
available fields, definitions, and allowable values.

<a name="BiologicallyDerivedProduct"></a>
## BiologicallyDerivedProduct

A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | Whether the product is currently available. <br /> **Default:** _available_ |


See the [BiologicallyDerivedProduct FHIR Documentation](http://hl7.org/fhir/R4/biologicallyderivedproduct.html) for the full list of
available fields, definitions, and allowable values.

<a name="BodyStructure"></a>
## BodyStructure

Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The person to which the body site belongs. |


See the [BodyStructure FHIR Documentation](http://hl7.org/fhir/R4/bodystructure.html) for the full list of
available fields, definitions, and allowable values.

<a name="Bundle"></a>
## Bundle

A container for a collection of resources.



See the [Bundle FHIR Documentation](http://hl7.org/fhir/R4/bundle.html) for the full list of
available fields, definitions, and allowable values.

<a name="CapabilityStatement"></a>
## CapabilityStatement

A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this capability statement. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [CapabilityStatement FHIR Documentation](http://hl7.org/fhir/R4/capabilitystatement.html) for the full list of
available fields, definitions, and allowable values.

<a name="CarePlan"></a>
## CarePlan

Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Identifies the patient or group whose intended care is described by the plan. |
| Default Value | status | Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record. <br /> **Default:** _active_ |


See the [CarePlan FHIR Documentation](http://hl7.org/fhir/R4/careplan.html) for the full list of
available fields, definitions, and allowable values.

<a name="CareTeam"></a>
## CareTeam

The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Identifies the patient or group whose intended care is handled by the team. |
| Default Value | status | Indicates the current state of the care team. <br /> **Default:** _active_ |


See the [CareTeam FHIR Documentation](http://hl7.org/fhir/R4/careteam.html) for the full list of
available fields, definitions, and allowable values.

<a name="CatalogEntry"></a>
## CatalogEntry

Catalog entries are wrappers that contextualize items included in a catalog.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable. <br /> **Default:** _active_ |


See the [CatalogEntry FHIR Documentation](http://hl7.org/fhir/R4/catalogentry.html) for the full list of
available fields, definitions, and allowable values.

<a name="ChargeItem"></a>
## ChargeItem

The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The individual or set of individuals the action is being or was performed on. |
| Default Value | status | The current state of the ChargeItem. <br /> **Default:** _billed_ |


See the [ChargeItem FHIR Documentation](http://hl7.org/fhir/R4/chargeitem.html) for the full list of
available fields, definitions, and allowable values.

<a name="ChargeItemDefinition"></a>
## ChargeItemDefinition

The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The current state of the ChargeItemDefinition. <br /> **Default:** _active_ |


See the [ChargeItemDefinition FHIR Documentation](http://hl7.org/fhir/R4/chargeitemdefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="Claim"></a>
## Claim

A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought. |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |
| Default Value | use | A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future. <br /> **Default:** _claim_ |


See the [Claim FHIR Documentation](http://hl7.org/fhir/R4/claim.html) for the full list of
available fields, definitions, and allowable values.

<a name="ClaimResponse"></a>
## ClaimResponse

This resource provides the adjudication details from the processing of a Claim resource.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought. |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |
| Default Value | outcome | The outcome of the claim, predetermination, or preauthorization processing. <br /> **Default:** _complete_ |


See the [ClaimResponse FHIR Documentation](http://hl7.org/fhir/R4/claimresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="ClinicalImpression"></a>
## ClinicalImpression

A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient or group of individuals assessed as part of this record. |
| Default Value | status | Identifies the workflow status of the assessment. <br /> **Default:** _completed_ |


See the [ClinicalImpression FHIR Documentation](http://hl7.org/fhir/R4/clinicalimpression.html) for the full list of
available fields, definitions, and allowable values.

<a name="CodeSystem"></a>
## CodeSystem

The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The date (and optionally time) when the code system resource was created or revised. <br /> **Default:** _active_ |


See the [CodeSystem FHIR Documentation](http://hl7.org/fhir/R4/codesystem.html) for the full list of
available fields, definitions, and allowable values.

<a name="Communication"></a>
## Communication

An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient or group that was the focus of this communication. |
| Default Value | status | The status of the transmission. <br /> **Default:** _completed_ |


See the [Communication FHIR Documentation](http://hl7.org/fhir/R4/communication.html) for the full list of
available fields, definitions, and allowable values.

<a name="CommunicationRequest"></a>
## CommunicationRequest

A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient or group that is the focus of this communication request. |
| Default Value | status | The status of the proposal or order. <br /> **Default:** _completed_ |


See the [CommunicationRequest FHIR Documentation](http://hl7.org/fhir/R4/communicationrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="CompartmentDefinition"></a>
## CompartmentDefinition

A compartment definition that defines how resources are accessed on a server.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this compartment definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [CompartmentDefinition FHIR Documentation](http://hl7.org/fhir/R4/compartmentdefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="Composition"></a>
## Composition

A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure). |
| Default Value | status | The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document. <br /> **Default:** _final_ |


See the [Composition FHIR Documentation](http://hl7.org/fhir/R4/composition.html) for the full list of
available fields, definitions, and allowable values.

<a name="ConceptMap"></a>
## ConceptMap

A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this concept map. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [ConceptMap FHIR Documentation](http://hl7.org/fhir/R4/conceptmap.html) for the full list of
available fields, definitions, and allowable values.

<a name="Condition"></a>
## Condition

A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Indicates the patient or group who the condition record is associated with. |
| Default Value | clinicalStatus | The clinical status of the condition. <br /> **Default:** _http://terminology.hl7.org/CodeSystem/condition-clinical#resolved Resolved_ when _abatementDateTime_ has a value; _http://terminology.hl7.org/CodeSystem/condition-clinical#active Active_ otherwise |
| Default Value | verificationStatus | The verification status to support the clinical status of the condition. <br /> **Default:** _http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed Confirmed_ |


See the [Condition FHIR Documentation](http://hl7.org/fhir/R4/condition.html) for the full list of
available fields, definitions, and allowable values.

<a name="Consent"></a>
## Consent

A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient/healthcare consumer to whom this consent applies. |
| Default Value | status | Indicates the current state of this consent. <br /> **Default:** _active_ |


See the [Consent FHIR Documentation](http://hl7.org/fhir/R4/consent.html) for the full list of
available fields, definitions, and allowable values.

<a name="Contract"></a>
## Contract

Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the resource instance. <br /> **Default:** _executed_ |


See the [Contract FHIR Documentation](http://hl7.org/fhir/R4/contract.html) for the full list of
available fields, definitions, and allowable values.

<a name="Coverage"></a>
## Coverage

Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | beneficiary | The party who benefits from the insurance coverage; the patient when products and/or services are provided. |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |


See the [Coverage FHIR Documentation](http://hl7.org/fhir/R4/coverage.html) for the full list of
available fields, definitions, and allowable values.

<a name="CoverageEligibilityRequest"></a>
## CoverageEligibilityRequest

The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The party who is the beneficiary of the supplied coverage and for whom eligibility is sought. |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |


See the [CoverageEligibilityRequest FHIR Documentation](http://hl7.org/fhir/R4/coverageeligibilityrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="CoverageEligibilityResponse"></a>
## CoverageEligibilityResponse

This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The party who is the beneficiary of the supplied coverage and for whom eligibility is sought. |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |
| Default Value | outcome | The outcome of the request processing. <br /> **Default:** _complete_ |


See the [CoverageEligibilityResponse FHIR Documentation](http://hl7.org/fhir/R4/coverageeligibilityresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="DetectedIssue"></a>
## DetectedIssue

Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | Indicates the patient whose record the detected issue is associated with. |
| Default Value | status | Indicates the status of the detected issue. <br /> **Default:** _final_ |


See the [DetectedIssue FHIR Documentation](http://hl7.org/fhir/R4/detectedissue.html) for the full list of
available fields, definitions, and allowable values.

<a name="Device"></a>
## Device

A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | Patient information, If the device is affixed to a person. |
| Default Value | status | Status of the Device availability. <br /> **Default:** _active_ |


See the [Device FHIR Documentation](http://hl7.org/fhir/R4/device.html) for the full list of
available fields, definitions, and allowable values.

<a name="DeviceDefinition"></a>
## DeviceDefinition

The characteristics, operational status and capabilities of a medical-related component of a medical device.



See the [DeviceDefinition FHIR Documentation](http://hl7.org/fhir/R4/devicedefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="DeviceMetric"></a>
## DeviceMetric

Describes a measurement, calculation or setting capability of a medical device.



See the [DeviceMetric FHIR Documentation](http://hl7.org/fhir/R4/devicemetric.html) for the full list of
available fields, definitions, and allowable values.

<a name="DeviceRequest"></a>
## DeviceRequest

Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient who will use the device. |
| Default Value | status | The status of the request. <br /> **Default:** _completed_ |


See the [DeviceRequest FHIR Documentation](http://hl7.org/fhir/R4/devicerequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="DeviceUseStatement"></a>
## DeviceUseStatement

A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient who used the device. |
| Default Value | status | A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed. <br /> **Default:** _active_ |


See the [DeviceUseStatement FHIR Documentation](http://hl7.org/fhir/R4/deviceusestatement.html) for the full list of
available fields, definitions, and allowable values.

<a name="DiagnosticReport"></a>
## DiagnosticReport

The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources. |
| Default Value | status | The status of the diagnostic report. <br /> **Default:** _final_ |


See the [DiagnosticReport FHIR Documentation](http://hl7.org/fhir/R4/diagnosticreport.html) for the full list of
available fields, definitions, and allowable values.

<a name="DocumentManifest"></a>
## DocumentManifest

A collection of documents compiled for a purpose together with metadata that applies to the collection.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case). |
| Default Value | status | The status of this document manifest. <br /> **Default:** _current_ |


See the [DocumentManifest FHIR Documentation](http://hl7.org/fhir/R4/documentmanifest.html) for the full list of
available fields, definitions, and allowable values.

<a name="DocumentReference"></a>
## DocumentReference

A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). |
| Default Value | status | The status of this document reference. <br /> **Default:** _current_ |
| Default Value | docStatus | The status of the underlying document. <br /> **Default:** _http://hl7.org/fhir/composition-status#final Final_ |


See the [DocumentReference FHIR Documentation](http://hl7.org/fhir/R4/documentreference.html) for the full list of
available fields, definitions, and allowable values.

<a name="DomainResource"></a>
## DomainResource

A resource that includes narrative, extensions, and contained resources.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [DomainResource FHIR Documentation](http://hl7.org/fhir/R4/domainresource.html) for the full list of
available fields, definitions, and allowable values.

<a name="EffectEvidenceSynthesis"></a>
## EffectEvidenceSynthesis

The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this effect evidence synthesis. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [EffectEvidenceSynthesis FHIR Documentation](http://hl7.org/fhir/R4/effectevidencesynthesis.html) for the full list of
available fields, definitions, and allowable values.

<a name="Encounter"></a>
## Encounter

An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient or group present at the encounter. |
| Default Value | status | planned | arrived | triaged | in-progress | onleave | finished | cancelled +. <br /> **Default:** _finished_ |


See the [Encounter FHIR Documentation](http://hl7.org/fhir/R4/encounter.html) for the full list of
available fields, definitions, and allowable values.

<a name="Endpoint"></a>
## Endpoint

The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | active | suspended | error | off | test. <br /> **Default:** _active_ |


See the [Endpoint FHIR Documentation](http://hl7.org/fhir/R4/endpoint.html) for the full list of
available fields, definitions, and allowable values.

<a name="EnrollmentRequest"></a>
## EnrollmentRequest

This resource provides the insurance enrollment details to the insurer regarding a specified coverage.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | candidate | Patient Resource. |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |


See the [EnrollmentRequest FHIR Documentation](http://hl7.org/fhir/R4/enrollmentrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="EnrollmentResponse"></a>
## EnrollmentResponse

This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |
| Default Value | outcome | Processing status: error, complete. <br /> **Default:** _complete_ |


See the [EnrollmentResponse FHIR Documentation](http://hl7.org/fhir/R4/enrollmentresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="EpisodeOfCare"></a>
## EpisodeOfCare

An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient who is the focus of this episode of care. |
| Default Value | status | planned | waitlist | active | onhold | finished | cancelled. <br /> **Default:** _finished_ |


See the [EpisodeOfCare FHIR Documentation](http://hl7.org/fhir/R4/episodeofcare.html) for the full list of
available fields, definitions, and allowable values.

<a name="EventDefinition"></a>
## EventDefinition

The EventDefinition resource provides a reusable description of when a particular event can occur.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this event definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [EventDefinition FHIR Documentation](http://hl7.org/fhir/R4/eventdefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="Evidence"></a>
## Evidence

The Evidence resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this evidence. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [Evidence FHIR Documentation](http://hl7.org/fhir/R4/evidence.html) for the full list of
available fields, definitions, and allowable values.

<a name="EvidenceVariable"></a>
## EvidenceVariable

The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this evidence variable. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [EvidenceVariable FHIR Documentation](http://hl7.org/fhir/R4/evidencevariable.html) for the full list of
available fields, definitions, and allowable values.

<a name="ExampleScenario"></a>
## ExampleScenario

Example of workflow instance.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this example scenario. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [ExampleScenario FHIR Documentation](http://hl7.org/fhir/R4/examplescenario.html) for the full list of
available fields, definitions, and allowable values.

<a name="ExplanationOfBenefit"></a>
## ExplanationOfBenefit

This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought. |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |
| Default Value | use | A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future. <br /> **Default:** _claim_ |
| Default Value | outcome | The outcome of the claim, predetermination, or preauthorization processing. <br /> **Default:** _complete_ |


See the [ExplanationOfBenefit FHIR Documentation](http://hl7.org/fhir/R4/explanationofbenefit.html) for the full list of
available fields, definitions, and allowable values.

<a name="FamilyMemberHistory"></a>
## FamilyMemberHistory

Significant health conditions for a person related to the patient relevant in the context of care for the patient.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The person who this history concerns. |
| Default Value | status | A code specifying the status of the record of the family history of a specific family member. <br /> **Default:** _completed_ |
| Default Value | name | This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair". <br /> **Default:** _Unknown_ |


See the [FamilyMemberHistory FHIR Documentation](http://hl7.org/fhir/R4/familymemberhistory.html) for the full list of
available fields, definitions, and allowable values.

<a name="Flag"></a>
## Flag

Prospective warnings of potential issues when providing care to the patient.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with. |
| Default Value | status | Supports basic workflow. <br /> **Default:** _active_ |


See the [Flag FHIR Documentation](http://hl7.org/fhir/R4/flag.html) for the full list of
available fields, definitions, and allowable values.

<a name="Goal"></a>
## Goal

Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Identifies the patient, group or organization for whom the goal is being established. |
| Default Value | lifecycleStatus | The state of the goal throughout its lifecycle. <br /> **Default:** _completed_ when _outcomeCode_ has a value; _accepted_ otherwise |


See the [Goal FHIR Documentation](http://hl7.org/fhir/R4/goal.html) for the full list of
available fields, definitions, and allowable values.

<a name="GraphDefinition"></a>
## GraphDefinition

A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this graph definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [GraphDefinition FHIR Documentation](http://hl7.org/fhir/R4/graphdefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="Group"></a>
## Group

Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.



See the [Group FHIR Documentation](http://hl7.org/fhir/R4/group.html) for the full list of
available fields, definitions, and allowable values.

<a name="GuidanceResponse"></a>
## GuidanceResponse

A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient for which the request was processed. |
| Default Value | status | The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information. <br /> **Default:** _success_ |


See the [GuidanceResponse FHIR Documentation](http://hl7.org/fhir/R4/guidanceresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="HealthcareService"></a>
## HealthcareService

The details of a healthcare service available at a location.



See the [HealthcareService FHIR Documentation](http://hl7.org/fhir/R4/healthcareservice.html) for the full list of
available fields, definitions, and allowable values.

<a name="ImagingStudy"></a>
## ImagingStudy

Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The subject, typically a patient, of the imaging study. |
| Default Value | status | The current state of the ImagingStudy. <br /> **Default:** _available_ |


See the [ImagingStudy FHIR Documentation](http://hl7.org/fhir/R4/imagingstudy.html) for the full list of
available fields, definitions, and allowable values.

<a name="Immunization"></a>
## Immunization

Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient who either received or did not receive the immunization. |
| Default Value | status | Indicates the current status of the immunization event. <br /> **Default:** _completed_ |
| Default Value | primarySource | An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded. <br /> **Default:** _true_ |


See the [Immunization FHIR Documentation](http://hl7.org/fhir/R4/immunization.html) for the full list of
available fields, definitions, and allowable values.

<a name="ImmunizationEvaluation"></a>
## ImmunizationEvaluation

Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The individual for whom the evaluation is being done. |
| Default Value | status | Indicates the current status of the evaluation of the vaccination administration event. <br /> **Default:** _completed_ |


See the [ImmunizationEvaluation FHIR Documentation](http://hl7.org/fhir/R4/immunizationevaluation.html) for the full list of
available fields, definitions, and allowable values.

<a name="ImmunizationRecommendation"></a>
## ImmunizationRecommendation

A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient the recommendation(s) are for. |


See the [ImmunizationRecommendation FHIR Documentation](http://hl7.org/fhir/R4/immunizationrecommendation.html) for the full list of
available fields, definitions, and allowable values.

<a name="ImplementationGuide"></a>
## ImplementationGuide

A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this implementation guide. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [ImplementationGuide FHIR Documentation](http://hl7.org/fhir/R4/implementationguide.html) for the full list of
available fields, definitions, and allowable values.

<a name="InsurancePlan"></a>
## InsurancePlan

Details of a Health Insurance product/plan provided by an organization.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The current state of the health insurance product. <br /> **Default:** _active_ |


See the [InsurancePlan FHIR Documentation](http://hl7.org/fhir/R4/insuranceplan.html) for the full list of
available fields, definitions, and allowable values.

<a name="Invoice"></a>
## Invoice

Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The individual or set of individuals receiving the goods and services billed in this invoice. |
| Default Value | status | The current state of the Invoice. <br /> **Default:** _balanced_ |


See the [Invoice FHIR Documentation](http://hl7.org/fhir/R4/invoice.html) for the full list of
available fields, definitions, and allowable values.

<a name="Library"></a>
## Library

The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this library. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [Library FHIR Documentation](http://hl7.org/fhir/R4/library.html) for the full list of
available fields, definitions, and allowable values.

<a name="Linkage"></a>
## Linkage

Identifies two or more records (resource instances) that refer to the same real-world "occurrence".



See the [Linkage FHIR Documentation](http://hl7.org/fhir/R4/linkage.html) for the full list of
available fields, definitions, and allowable values.

<a name="List"></a>
## List

A list is a curated collection of resources.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The common subject (or patient) of the resources that are in the list if there is one. |
| Default Value | status | Indicates the current state of this list. <br /> **Default:** _current_ |
| Default Value | mode | How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted. <br /> **Default:** _working_ |


See the [List FHIR Documentation](http://hl7.org/fhir/R4/list.html) for the full list of
available fields, definitions, and allowable values.

<a name="Location"></a>
## Location

Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location. <br /> **Default:** _active_ |


See the [Location FHIR Documentation](http://hl7.org/fhir/R4/location.html) for the full list of
available fields, definitions, and allowable values.

<a name="Measure"></a>
## Measure

The Measure resource provides the definition of a quality measure.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this measure. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [Measure FHIR Documentation](http://hl7.org/fhir/R4/measure.html) for the full list of
available fields, definitions, and allowable values.

<a name="MeasureReport"></a>
## MeasureReport

The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Optional subject identifying the individual or individuals the report is for. |
| Default Value | status | The MeasureReport status. No data will be available until the MeasureReport status is complete. <br /> **Default:** _complete_ |


See the [MeasureReport FHIR Documentation](http://hl7.org/fhir/R4/measurereport.html) for the full list of
available fields, definitions, and allowable values.

<a name="Media"></a>
## Media

A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Who/What this Media is a record of. |
| Default Value | status | The current state of the {{title}}. <br /> **Default:** _completed_ |


See the [Media FHIR Documentation](http://hl7.org/fhir/R4/media.html) for the full list of
available fields, definitions, and allowable values.

<a name="Medication"></a>
## Medication

This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | A code to indicate if the medication is in active use. <br /> **Default:** _active_ |


See the [Medication FHIR Documentation](http://hl7.org/fhir/R4/medication.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicationAdministration"></a>
## MedicationAdministration

Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The person or animal or group receiving the medication. |
| Default Value | status | Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way. <br /> **Default:** _completed_ |
| Alias | code | Alias for _medicationCodeableConcept_.|


See the [MedicationAdministration FHIR Documentation](http://hl7.org/fhir/R4/medicationadministration.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicationDispense"></a>
## MedicationDispense

Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | A link to a resource representing the person or the group to whom the medication will be given. |
| Default Value | status | A code specifying the state of the set of dispense events. <br /> **Default:** _completed_ |
| Alias | code | Alias for _medicationCodeableConcept_.|


See the [MedicationDispense FHIR Documentation](http://hl7.org/fhir/R4/medicationdispense.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicationKnowledge"></a>
## MedicationKnowledge

Information about a medication that is used to support knowledge.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties. <br /> **Default:** _active_ |


See the [MedicationKnowledge FHIR Documentation](http://hl7.org/fhir/R4/medicationknowledge.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicationRequest"></a>
## MedicationRequest

An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | A link to a resource representing the person or set of individuals to whom the medication will be given. |
| Default Value | status | A code specifying the current state of the order.  Generally, this will be active or completed state. <br /> **Default:** _active_ |
| Default Value | intent | Whether the request is a proposal, plan, or an original order. <br /> **Default:** _order_ |
| Default Value | doNotPerform | If true indicates that the provider is asking for the medication request not to occur. <br /> **Default:** _false_ |
| Alias | code | Alias for _medicationCodeableConcept_.|


See the [MedicationRequest FHIR Documentation](http://hl7.org/fhir/R4/medicationrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicationStatement"></a>
## MedicationStatement

A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 

The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The person, animal or group who is/was taking the medication. |
| Default Value | status | A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally, this will be active or completed. <br /> **Default:** _active_ |
| Alias | code | Alias for _medicationCodeableConcept_.|


See the [MedicationStatement FHIR Documentation](http://hl7.org/fhir/R4/medicationstatement.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProduct"></a>
## MedicinalProduct

Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).



See the [MedicinalProduct FHIR Documentation](http://hl7.org/fhir/R4/medicinalproduct.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProductAuthorization"></a>
## MedicinalProductAuthorization

The regulatory authorization of a medicinal product.



See the [MedicinalProductAuthorization FHIR Documentation](http://hl7.org/fhir/R4/medicinalproductauthorization.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProductContraindication"></a>
## MedicinalProductContraindication

The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.



See the [MedicinalProductContraindication FHIR Documentation](http://hl7.org/fhir/R4/medicinalproductcontraindication.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProductIndication"></a>
## MedicinalProductIndication

Indication for the Medicinal Product.



See the [MedicinalProductIndication FHIR Documentation](http://hl7.org/fhir/R4/medicinalproductindication.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProductIngredient"></a>
## MedicinalProductIngredient

An ingredient of a manufactured item or pharmaceutical product.



See the [MedicinalProductIngredient FHIR Documentation](http://hl7.org/fhir/R4/medicinalproductingredient.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProductInteraction"></a>
## MedicinalProductInteraction

The interactions of the medicinal product with other medicinal products, or other forms of interactions.



See the [MedicinalProductInteraction FHIR Documentation](http://hl7.org/fhir/R4/medicinalproductinteraction.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProductManufactured"></a>
## MedicinalProductManufactured

The manufactured item as contained in the packaged medicinal product.



See the [MedicinalProductManufactured FHIR Documentation](http://hl7.org/fhir/R4/medicinalproductmanufactured.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProductPackaged"></a>
## MedicinalProductPackaged

A medicinal product in a container or package.



See the [MedicinalProductPackaged FHIR Documentation](http://hl7.org/fhir/R4/medicinalproductpackaged.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProductPharmaceutical"></a>
## MedicinalProductPharmaceutical

A pharmaceutical product described in terms of its composition and dose form.



See the [MedicinalProductPharmaceutical FHIR Documentation](http://hl7.org/fhir/R4/medicinalproductpharmaceutical.html) for the full list of
available fields, definitions, and allowable values.

<a name="MedicinalProductUndesirableEffect"></a>
## MedicinalProductUndesirableEffect

Describe the undesirable effects of the medicinal product.



See the [MedicinalProductUndesirableEffect FHIR Documentation](http://hl7.org/fhir/R4/medicinalproductundesirableeffect.html) for the full list of
available fields, definitions, and allowable values.

<a name="MessageDefinition"></a>
## MessageDefinition

Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this message definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [MessageDefinition FHIR Documentation](http://hl7.org/fhir/R4/messagedefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="MessageHeader"></a>
## MessageHeader

The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.



See the [MessageHeader FHIR Documentation](http://hl7.org/fhir/R4/messageheader.html) for the full list of
available fields, definitions, and allowable values.

<a name="MolecularSequence"></a>
## MolecularSequence

Raw data describing a biological sequence.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient whose sequencing results are described by this resource. |


See the [MolecularSequence FHIR Documentation](http://hl7.org/fhir/R4/molecularsequence.html) for the full list of
available fields, definitions, and allowable values.

<a name="NamingSystem"></a>
## NamingSystem

A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this naming system. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [NamingSystem FHIR Documentation](http://hl7.org/fhir/R4/namingsystem.html) for the full list of
available fields, definitions, and allowable values.

<a name="NutritionOrder"></a>
## NutritionOrder

A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding. |
| Default Value | status | The workflow status of the nutrition order/request. <br /> **Default:** _active_ |
| Default Value | intent | Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain. <br /> **Default:** _order_ |


See the [NutritionOrder FHIR Documentation](http://hl7.org/fhir/R4/nutritionorder.html) for the full list of
available fields, definitions, and allowable values.

<a name="Observation"></a>
## Observation

Measurements and simple assertions made about a patient, device or other subject.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation. |
| Default Value | status | The status of the result value. <br /> **Default:** _final_ |


See the [Observation FHIR Documentation](http://hl7.org/fhir/R4/observation.html) for the full list of
available fields, definitions, and allowable values.

<a name="ObservationDefinition"></a>
## ObservationDefinition

Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.



See the [ObservationDefinition FHIR Documentation](http://hl7.org/fhir/R4/observationdefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="OperationDefinition"></a>
## OperationDefinition

A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this operation definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [OperationDefinition FHIR Documentation](http://hl7.org/fhir/R4/operationdefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="OperationOutcome"></a>
## OperationOutcome

A collection of error, warning, or information messages that result from a system action.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [OperationOutcome FHIR Documentation](http://hl7.org/fhir/R4/operationoutcome.html) for the full list of
available fields, definitions, and allowable values.

<a name="Organization"></a>
## Organization

A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.



See the [Organization FHIR Documentation](http://hl7.org/fhir/R4/organization.html) for the full list of
available fields, definitions, and allowable values.

<a name="OrganizationAffiliation"></a>
## OrganizationAffiliation

Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.



See the [OrganizationAffiliation FHIR Documentation](http://hl7.org/fhir/R4/organizationaffiliation.html) for the full list of
available fields, definitions, and allowable values.

<a name="Parameters"></a>
## Parameters

This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [Parameters FHIR Documentation](http://hl7.org/fhir/R4/parameters.html) for the full list of
available fields, definitions, and allowable values.

<a name="Patient"></a>
## Patient

Demographics and other administrative information about an individual or animal receiving care or other health-related services.



See the [Patient FHIR Documentation](http://hl7.org/fhir/R4/patient.html) for the full list of
available fields, definitions, and allowable values.

<a name="PaymentNotice"></a>
## PaymentNotice

This resource provides the status of the payment for goods and services rendered, and the request and response resource references.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |


See the [PaymentNotice FHIR Documentation](http://hl7.org/fhir/R4/paymentnotice.html) for the full list of
available fields, definitions, and allowable values.

<a name="PaymentReconciliation"></a>
## PaymentReconciliation

This resource provides the details including amount of a payment and allocates the payment items being paid.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |
| Default Value | outcome | The outcome of a request for a reconciliation. <br /> **Default:** _complete_ |


See the [PaymentReconciliation FHIR Documentation](http://hl7.org/fhir/R4/paymentreconciliation.html) for the full list of
available fields, definitions, and allowable values.

<a name="Person"></a>
## Person

Demographics and administrative information about a person independent of a specific health-related context.



See the [Person FHIR Documentation](http://hl7.org/fhir/R4/person.html) for the full list of
available fields, definitions, and allowable values.

<a name="PlanDefinition"></a>
## PlanDefinition

This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this plan definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [PlanDefinition FHIR Documentation](http://hl7.org/fhir/R4/plandefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="Practitioner"></a>
## Practitioner

A person who is directly or indirectly involved in the provisioning of healthcare.



See the [Practitioner FHIR Documentation](http://hl7.org/fhir/R4/practitioner.html) for the full list of
available fields, definitions, and allowable values.

<a name="PractitionerRole"></a>
## PractitionerRole

A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.



See the [PractitionerRole FHIR Documentation](http://hl7.org/fhir/R4/practitionerrole.html) for the full list of
available fields, definitions, and allowable values.

<a name="Procedure"></a>
## Procedure

An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The person, animal or group on which the procedure was performed. |
| Default Value | status | A code specifying the state of the procedure. Generally, this will be the in-progress or completed state. <br /> **Default:** _completed_ |


See the [Procedure FHIR Documentation](http://hl7.org/fhir/R4/procedure.html) for the full list of
available fields, definitions, and allowable values.

<a name="Provenance"></a>
## Provenance

Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.



See the [Provenance FHIR Documentation](http://hl7.org/fhir/R4/provenance.html) for the full list of
available fields, definitions, and allowable values.

<a name="Questionnaire"></a>
## Questionnaire

A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this questionnaire. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [Questionnaire FHIR Documentation](http://hl7.org/fhir/R4/questionnaire.html) for the full list of
available fields, definitions, and allowable values.

<a name="QuestionnaireResponse"></a>
## QuestionnaireResponse

A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The subject of the questionnaire response.  This could be a patient, organization, practitioner, device, etc.  This is who/what the answers apply to, but is not necessarily the source of information. |
| Default Value | status | The position of the questionnaire response within its overall lifecycle. <br /> **Default:** _completed_ |


See the [QuestionnaireResponse FHIR Documentation](http://hl7.org/fhir/R4/questionnaireresponse.html) for the full list of
available fields, definitions, and allowable values.

<a name="RelatedPerson"></a>
## RelatedPerson

Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | The patient this person is related to. |


See the [RelatedPerson FHIR Documentation](http://hl7.org/fhir/R4/relatedperson.html) for the full list of
available fields, definitions, and allowable values.

<a name="RequestGroup"></a>
## RequestGroup

A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The subject for which the request group was created. |
| Default Value | status | The current state of the request. For request groups, the status reflects the status of all the requests in the group. <br /> **Default:** _active_ |
| Default Value | intent | Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain. <br /> **Default:** _order_ |


See the [RequestGroup FHIR Documentation](http://hl7.org/fhir/R4/requestgroup.html) for the full list of
available fields, definitions, and allowable values.

<a name="ResearchDefinition"></a>
## ResearchDefinition

The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this research definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [ResearchDefinition FHIR Documentation](http://hl7.org/fhir/R4/researchdefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="ResearchElementDefinition"></a>
## ResearchElementDefinition

The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this research element definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [ResearchElementDefinition FHIR Documentation](http://hl7.org/fhir/R4/researchelementdefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="ResearchStudy"></a>
## ResearchStudy

A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The current state of the study. <br /> **Default:** _active_ |


See the [ResearchStudy FHIR Documentation](http://hl7.org/fhir/R4/researchstudy.html) for the full list of
available fields, definitions, and allowable values.

<a name="ResearchSubject"></a>
## ResearchSubject

A physical entity which is the primary unit of operational and/or administrative interest in a study.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | individual | The record of the person or animal who is involved in the study. |
| Default Value | status | The current state of the subject. <br /> **Default:** _on-study_ |


See the [ResearchSubject FHIR Documentation](http://hl7.org/fhir/R4/researchsubject.html) for the full list of
available fields, definitions, and allowable values.

<a name="Resource"></a>
## Resource

This is the base resource type for everything.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._



See the [Resource FHIR Documentation](http://hl7.org/fhir/R4/resource.html) for the full list of
available fields, definitions, and allowable values.

<a name="RiskAssessment"></a>
## RiskAssessment

An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | The patient or group the risk assessment applies to. |
| Default Value | status | The status of the RiskAssessment, using the same statuses as an Observation. <br /> **Default:** _final_ |


See the [RiskAssessment FHIR Documentation](http://hl7.org/fhir/R4/riskassessment.html) for the full list of
available fields, definitions, and allowable values.

<a name="RiskEvidenceSynthesis"></a>
## RiskEvidenceSynthesis

The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this risk evidence synthesis. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [RiskEvidenceSynthesis FHIR Documentation](http://hl7.org/fhir/R4/riskevidencesynthesis.html) for the full list of
available fields, definitions, and allowable values.

<a name="Schedule"></a>
## Schedule

A container for slots of time that may be available for booking appointments.



See the [Schedule FHIR Documentation](http://hl7.org/fhir/R4/schedule.html) for the full list of
available fields, definitions, and allowable values.

<a name="SearchParameter"></a>
## SearchParameter

A search parameter that defines a named search item that can be used to search/filter on a resource.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this search parameter. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [SearchParameter FHIR Documentation](http://hl7.org/fhir/R4/searchparameter.html) for the full list of
available fields, definitions, and allowable values.

<a name="ServiceRequest"></a>
## ServiceRequest

A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the order. <br /> **Default:** _active_ |
| Default Value | intent | Whether the request is a proposal, plan, an original order or a reflex order. <br /> **Default:** _order_ |
| Default Value | doNotPerform | Set this to true if the record is saying that the service/procedure should NOT be performed. <br /> **Default:** _false_ |


See the [ServiceRequest FHIR Documentation](http://hl7.org/fhir/R4/servicerequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="Slot"></a>
## Slot

A slot of time on a schedule that may be available for booking appointments.



See the [Slot FHIR Documentation](http://hl7.org/fhir/R4/slot.html) for the full list of
available fields, definitions, and allowable values.

<a name="Specimen"></a>
## Specimen

A sample to be used for analysis.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | subject | Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device. |
| Default Value | status | The availability of the specimen. <br /> **Default:** _available_ |


See the [Specimen FHIR Documentation](http://hl7.org/fhir/R4/specimen.html) for the full list of
available fields, definitions, and allowable values.

<a name="SpecimenDefinition"></a>
## SpecimenDefinition

A kind of specimen with associated set of requirements.



See the [SpecimenDefinition FHIR Documentation](http://hl7.org/fhir/R4/specimendefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="StructureDefinition"></a>
## StructureDefinition

A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this structure definition. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [StructureDefinition FHIR Documentation](http://hl7.org/fhir/R4/structuredefinition.html) for the full list of
available fields, definitions, and allowable values.

<a name="StructureMap"></a>
## StructureMap

A Map of relationships between 2 structures that can be used to transform data.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this structure map. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [StructureMap FHIR Documentation](http://hl7.org/fhir/R4/structuremap.html) for the full list of
available fields, definitions, and allowable values.

<a name="Subscription"></a>
## Subscription

The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of the subscription, which marks the server state for managing the subscription. <br /> **Default:** _active_ |


See the [Subscription FHIR Documentation](http://hl7.org/fhir/R4/subscription.html) for the full list of
available fields, definitions, and allowable values.

<a name="Substance"></a>
## Substance

A homogeneous material with a definite composition.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | A code to indicate if the substance is actively used. <br /> **Default:** _active_ |


See the [Substance FHIR Documentation](http://hl7.org/fhir/R4/substance.html) for the full list of
available fields, definitions, and allowable values.

<a name="SubstanceNucleicAcid"></a>
## SubstanceNucleicAcid

Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction.



See the [SubstanceNucleicAcid FHIR Documentation](http://hl7.org/fhir/R4/substancenucleicacid.html) for the full list of
available fields, definitions, and allowable values.

<a name="SubstancePolymer"></a>
## SubstancePolymer

Todo.



See the [SubstancePolymer FHIR Documentation](http://hl7.org/fhir/R4/substancepolymer.html) for the full list of
available fields, definitions, and allowable values.

<a name="SubstanceProtein"></a>
## SubstanceProtein

A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators.



See the [SubstanceProtein FHIR Documentation](http://hl7.org/fhir/R4/substanceprotein.html) for the full list of
available fields, definitions, and allowable values.

<a name="SubstanceReferenceInformation"></a>
## SubstanceReferenceInformation

Todo.



See the [SubstanceReferenceInformation FHIR Documentation](http://hl7.org/fhir/R4/substancereferenceinformation.html) for the full list of
available fields, definitions, and allowable values.

<a name="SubstanceSourceMaterial"></a>
## SubstanceSourceMaterial

Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex.



See the [SubstanceSourceMaterial FHIR Documentation](http://hl7.org/fhir/R4/substancesourcematerial.html) for the full list of
available fields, definitions, and allowable values.

<a name="SubstanceSpecification"></a>
## SubstanceSpecification

The detailed description of a substance, typically at a level beyond what is used for prescribing.



See the [SubstanceSpecification FHIR Documentation](http://hl7.org/fhir/R4/substancespecification.html) for the full list of
available fields, definitions, and allowable values.

<a name="SupplyDelivery"></a>
## SupplyDelivery

Record of delivery of what is supplied.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | A link to a resource representing the person whom the delivered item is for. |
| Default Value | status | A code specifying the state of the dispense event. <br /> **Default:** _completed_ |


See the [SupplyDelivery FHIR Documentation](http://hl7.org/fhir/R4/supplydelivery.html) for the full list of
available fields, definitions, and allowable values.

<a name="SupplyRequest"></a>
## SupplyRequest

A record of a request for a medication, substance or device used in the healthcare setting.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | Status of the supply request. <br /> **Default:** _active_ |


See the [SupplyRequest FHIR Documentation](http://hl7.org/fhir/R4/supplyrequest.html) for the full list of
available fields, definitions, and allowable values.

<a name="Task"></a>
## Task

A task to be performed.


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The current status of the task. <br /> **Default:** _completed_ |


See the [Task FHIR Documentation](http://hl7.org/fhir/R4/task.html) for the full list of
available fields, definitions, and allowable values.

<a name="TerminologyCapabilities"></a>
## TerminologyCapabilities

A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this terminology capabilities. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [TerminologyCapabilities FHIR Documentation](http://hl7.org/fhir/R4/terminologycapabilities.html) for the full list of
available fields, definitions, and allowable values.

<a name="TestReport"></a>
## TestReport

A summary of information based on the results of executing a TestScript.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The current state of this test report. <br /> **Default:** _completed_ |


See the [TestReport FHIR Documentation](http://hl7.org/fhir/R4/testreport.html) for the full list of
available fields, definitions, and allowable values.

<a name="TestScript"></a>
## TestScript

A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this test script. Enables tracking the life-cycle of the content. <br /> **Default:** _active_ |


See the [TestScript FHIR Documentation](http://hl7.org/fhir/R4/testscript.html) for the full list of
available fields, definitions, and allowable values.

<a name="ValueSet"></a>
## ValueSet

A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The status of this value set. Enables tracking the life-cycle of the content. The status of the value set applies to the value set definition (ValueSet.compose) and the associated ValueSet metadata. Expansions do not have a state. <br /> **Default:** _active_ |


See the [ValueSet FHIR Documentation](http://hl7.org/fhir/R4/valueset.html) for the full list of
available fields, definitions, and allowable values.

<a name="VerificationResult"></a>
## VerificationResult

Describes validation requirements, source(s), status and dates for one or more elements.


_NOTE: It is extremely rare for CDS test authors to use this resource as patient data for CDS tests._


|     | Field | Description |
| --- | ----- | ----------- |
| Default Value | status | The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed). <br /> **Default:** _validated_ |


See the [VerificationResult FHIR Documentation](http://hl7.org/fhir/R4/verificationresult.html) for the full list of
available fields, definitions, and allowable values.

<a name="VisionPrescription"></a>
## VisionPrescription

An authorization for the provision of glasses and/or contact lenses to a patient.


|     | Field | Description |
| --- | ----- | ----------- |
| Patient Reference | patient | A resource reference to the person to whom the vision prescription applies. |
| Default Value | status | The status of the resource instance. <br /> **Default:** _active_ |


See the [VisionPrescription FHIR Documentation](http://hl7.org/fhir/R4/visionprescription.html) for the full list of
available fields, definitions, and allowable values.
