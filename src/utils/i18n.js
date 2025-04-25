import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      YourSafety: "Your Safety",
      OurPriority: "Our Priority",
      typewriterWords: [
        "Security Services",
        "Facility Management",
        "Cleaning Services",
      ],
      about: "About Us",
      overview: "Overview",
      intro:
        "We are seasoned security professionals with years of hands-on experience, driven by a strong passion for safety, vigilance, and expertise. Our commitment to excellence ensures the delivery of top-tier protection services, meticulously tailored to meet diverse security needs across various industries. With a deep understanding of risk management, surveillance, and advanced security protocols, we take a proactive approach to safeguarding people, properties, and assets. Our team is equipped with cutting-edge technology and industry best practices, enabling us to anticipate potential threats and respond swiftly to any security challenges. Whether it's event protection, emergency response, or facility management, we strive to create a safe, secure, and worry-free environment for our clients, fostering peace of mind and trust at every step.",
      service: "Service",
      services: "Services",
      SecurityServices: "Security Services",
      MoreSecurityServices: "More Security Services",
      CleaningServices: "Cleaning Services",
      MoreCleaningServices: "More Cleaning Services",
      Secrecy: "connect with us to hold secrecy",
      SecrecyDescription:
        "As valued partners in our security ecosystem, you play a crucial role in maintaining a safe and secure environment. Your authority to provide and verify vital information significantly enhances the effectiveness of our services, ensuring a proactive approach to security management. By actively sharing real-time data, including security monitoring details, camera feeds, and incident reports, you help us maintain accuracy and responsiveness in addressing potential threats. This direct connection between you and our security infrastructure offers several key benefits:",
      Contact: "Get in touch",
      ContactText: "Contact",
      YourName: "Your Name",
      YourNamePlaceholder: "What's your name?",
      YourEmail: "Your Email",
      YourEmailPlaceholder: "What's your email?",
      YourMessage: "Your Message",
      YourMessagePlaceholder: "What's your message?",
      Send: "Send",
      Reset: "Reset",
      Success: "Message sent successfully",
      Error: "Something went wrong",
      Footer: "© All rights reserved",
      FacilityManagement: "Facility Management",
      ContactInfo: "Contact",
      Phone: "Phone",
      Email: "Email",
      ManagingDirector: "Managing Director",
      RegisterCourt: "Register Court",
      RegisterCourtText: "Charlottenburg District Court, HRB 265621 B",
      VATIdentificationNumber: "VAT Identification Number according to § 27 a VAT Act:",
      Responsible: "Responsible according to § 18 Abs. 2 MStV:",
      RightsReserved: "All rights reserved.",
      RightsReservedText: "The content of this website is protected by copyright law. Without written permission from Sterniz GmbH, the content of this site may not be reproduced, processed, duplicated, or distributed in any form using electronic systems, unless otherwise expressly noted.",
      Links: "Links to External Websites",
      LinksText: "This website contains links to external websites. As these sites are beyond our control, we cannot take responsibility for their content.",
      Disclaimer: "Disclaimer",
      DisclaimerText1: "This website reflects the temporary state of an ongoing work process. Although the information on our webpages has been compiled with the greatest care, Sterniz GmbH cannot guarantee the timeliness, accuracy, or completeness of the content.",
      DisclaimerText2: "Liability claims against Sterniz GmbH that are based on damages of a material or immaterial nature caused by the use or non-use of the information provided, or by incorrect and incomplete information, are generally excluded.",
      DisclaimerText3: "Every effort has been made to ensure the accuracy of the information and links contained on this website. However, due to the nature of the internet and the risks of interruptions or disconnections in data transmission, any liability related to the use of the information, links, or reliance on their accuracy is excluded. All information on this website is provided for general informational purposes only. A significant portion of the information is regularly updated to ensure you are accessing the most recent version.",
      DisclaimerText4: "We reserve the right to change the information on this server without prior notice. All offers are non-binding and subject to change.",
      Trademarks: "Trademarks and Trade Names",
      TrademarksText: "All brands and trade names mentioned on this website are subject to the regulations of the applicable trademark laws and the ownership rights of the respective registered owners.",
      LegalValidity: "Legal Validity of this Disclaimer",
      LegalValidityText: "This disclaimer is to be considered part of the internet offering that referred you to this page. Should parts or individual formulations of this text not, no longer, or not fully comply with the current legal situation, the remaining parts of the document shall remain unaffected in their content and validity.",
      SoftwareSolutions: "Software Solutions",
      SoftwareSolutionsText: "Explore our innovative software solutions designed to enhance business efficiency.",
      EmployeeManagementSystem: "Employee Management System",
      EmployeeManagementSystemText: "Our Employee Management System streamlines HR processes, automates attendance tracking, and ensures efficient workforce management.",
      AutomatedAttendancePayroll: "Automated Attendance & Payroll",
      ShiftSchedulingEmployeeTracking: "Shift Scheduling & Employee Tracking",
      PerformanceEvaluationReporting: "Performance Evaluation & Reporting",
      LearnMore: "Learn More",
      MoreSoftwareSolutionsComingSoon: "More Software Solutions Coming Soon",
      WhatWeOffer: "What We Offer",
      CleaningServices: "Cleaning Services",
      SoftwareSolutions: "Software Solutions",
      FacilityManagement: "Facility Management",
      PropertyProtection: "Property Protection",
      PropertyProtectionP: "Property Protection ensures the safety of residential and commercial properties by preventing unauthorized access, vandalism, and theft through advanced security measures and surveillance.",
      EventProtection: "Event Protection",
      EventProtectionP: "Event Protection ensures the safety and security of events by managing crowd control, preventing unauthorized access, and responding to emergencies effectively.",
      CleaningAndService: "Cleaning and Service",
      CleaningAndServiceP: "Comprehensive cleaning solutions, including routine maintenance, deep cleaning, and specialized services tailored to different industries.",
      MaintenanceCleaning: "Maintenance cleaning",
      MaintenanceCleaningP: "Regular cleaning to keep spaces clean and hygienic, ensuring long-term upkeep of buildings and facilities.",




      general_cleaning: {
        company: "General Cleaning",
        title: "Comprehensive Cleaning Solutions",
        result1: "Daily & Weekly Cleaning",
        result2: "Sanitization & Hygiene Maintenance",
        result3: "Eco-Friendly Solutions"
      },
      glass_cleaning: {
        company: "Glass & Facade Cleaning",
        title: "Clear & Spotless Windows",
        result1: "Streak-Free Window Cleaning",
        result2: "High-Rise Building Services",
        result3: "Glass Surface Polishing"
      },
      disinfectant_cleaning: {
        company: "Disinfectant Cleaning",
        title: "Health & Safety Compliance",
        result1: "Virus & Bacteria Elimination",
        result2: "Hospital-Grade Disinfection",
        result3: "Sanitization for Workplaces"
      },
      construction_cleaning: {
        company: "Construction Cleaning",
        title: "Post-Construction Cleanup",
        result1: "Dust & Debris Removal",
        result2: "Surface Polishing & Washing",
        result3: "Final Inspection Cleaning"
      },
      industrial_cleaning: {
        company: "Industrial Cleaning",
        title: "Heavy-Duty Cleaning Solutions",
        result1: "Machine & Equipment Cleaning",
        result2: "Oil & Grease Removal",
        result3: "Factory & Warehouse Maintenance"
      },






      "serviceTitles": {
        "propertyProtection": "Property Protection",
        "eventProtection": "Event Protection",
        "emergencyCallServiceControlCenter": "Emergency Call & Service Control Center",
        "gatekeeperReceptionService": "Gatekeeper & Reception Service",
        "fireSafetySecurityService": "Fire Safety Security Service",
        "departmentStoreDetective": "Department Store Detective",
        "doorman": "Doorman",
        "mallGuard": "Mall Guard",
        "constructionSiteSecurity": "Construction Site Security"
      },
      "serviceDescriptions": {
        "safeguardingYourAssets": "Safeguarding Your Assets",
        "ensuringSecureSafeEvents": "Ensuring Secure & Safe Events",
        "rapidResponse247Monitoring": "Rapid Response & 24/7 Monitoring",
        "professionalAccessControl": "Professional Access Control",
        "preventingFireHazards": "Preventing Fire Hazards",
        "retailTheftPrevention": "Retail Theft Prevention",
        "firstLineSecurity": "First Line of Security",
        "ensuringSafeShoppingEnvironments": "Ensuring Safe Shopping Environments",
        "protectingActiveWorksites": "Protecting Active Worksites"
      },
      "results": {
        "commercialResidentialSecurity": "Commercial & Residential Security",
        "advancedAlarmMonitoringSystems": "Advanced Alarm & Monitoring Systems",
        "accessControlPerimeterProtection": "Access Control & Perimeter Protection",
        "crowdControlAccessManagement": "Crowd Control & Access Management",
        "VIPExecutiveProtection": "VIP & Executive Protection",
        "emergencyResponsePlanning": "Emergency Response Planning",
        "emergencyDispatchSupport": "Emergency Dispatch & Support",
        "liveIncidentReporting": "Live Incident Reporting",
        "realTimeSurveillanceCoordination": "Real-Time Surveillance Coordination",
        "visitorVerificationRegistration": "Visitor Verification & Registration",
        "IDAccessBadgeManagement": "ID & Access Badge Management",
        "lobbyEntranceSurveillance": "Lobby & Entrance Surveillance",
        "firePreventionSafetyTraining": "Fire Prevention & Safety Training",
        "fireAlarmSuppressionSystems": "Fire Alarm & Suppression Systems",
        "emergencyEvacuationPlanning": "Emergency Evacuation Planning",
        "covertSurveillanceLossPrevention": "Covert Surveillance & Loss Prevention",
        "shopliftingPrevention": "Shoplifting Prevention",
        "storeSafetyIncidentReporting": "Store Safety & Incident Reporting",
        "guestScreeningAssistance": "Guest Screening & Assistance",
        "entranceExitMonitoring": "Entrance & Exit Monitoring",
        "securityPresencePatrolling": "Security Presence & Patrolling",
        "surveillanceSecurityPatrols": "Surveillance & Security Patrols",
        "crowdIncidentManagement": "Crowd & Incident Management",
        "emergencyHandlingResponse": "Emergency Handling & Response",
        "siteMonitoringAccessControl": "Site Monitoring & Access Control",
        "equipmentMaterialTheftPrevention": "Equipment & Material Theft Prevention",
        "intruderDetectionRapidResponse": "Intruder Detection & Rapid Response"
      },

      "property_protection": {
    "company": "Property Protection",
    "title": "Safeguarding Your Assets",
    "result1": "Commercial & Residential Security",
    "result2": "Advanced Alarm & Monitoring Systems",
    "result3": "Access Control & Perimeter Protection"
  },
  "event_protection": {
    "company": "Event Protection",
    "title": "Ensuring Secure & Safe Events",
    "result1": "Crowd Control & Access Management",
    "result2": "VIP & Executive Protection",
    "result3": "Emergency Response Planning"
  },
  "emergency_call_service_control_center": {
    "company": "Emergency Call & Service Control Center",
    "title": "Rapid Response & 24/7 Monitoring",
    "result1": "Emergency Dispatch & Support",
    "result2": "Live Incident Reporting",
    "result3": "Real-Time Surveillance Coordination"
  },
  "gatekeeper_reception_service": {
    "company": "Gatekeeper & Reception Service",
    "title": "Professional Access Control",
    "result1": "Visitor Verification & Registration",
    "result2": "ID & Access Badge Management",
    "result3": "Lobby & Entrance Surveillance"
  },
  "fire_safety_security_service": {
    "company": "Fire Safety Security Service",
    "title": "Preventing Fire Hazards",
    "result1": "Fire Prevention & Safety Training",
    "result2": "Fire Alarm & Suppression Systems",
    "result3": "Emergency Evacuation Planning"
  },
  "department_store_detective": {
    "company": "Department Store Detective",
    "title": "Retail Theft Prevention",
    "result1": "Covert Surveillance & Loss Prevention",
    "result2": "Shoplifting Prevention",
    "result3": "Store Safety & Incident Reporting"
  },
  "doorman": {
    "company": "Doorman",
    "title": "First Line of Security",
    "result1": "Guest Screening & Assistance",
    "result2": "Entrance & Exit Monitoring",
    "result3": "Security Presence & Patrolling"
  },
  "mall_guard": {
    "company": "Mall Guard",
    "title": "Ensuring Safe Shopping Environments",
    "result1": "Surveillance & Security Patrols",
    "result2": "Crowd & Incident Management",
    "result3": "Emergency Handling & Response"
  },
  "construction_site_security": {
    "company": "Construction Site Security",
    "title": "Protecting Active Worksites",
    "result1": "24/7 Site Monitoring & Access Control",
    "result2": "Equipment & Material Theft Prevention",
    "result3": "Intruder Detection & Rapid Response"
  },
    },
  },
  de: {
    translation: {
      YourSafety: "Ihre Sicherheit",
      OurPriority: "Unsere Priorität",
      typewriterWords: [
        "Sicherheitsdienste",
        "Gebäudewartung",
        "Reinigungsdienste",
      ],
      about: "Über uns",
      overview: "Überblick",
      intro:
        "Wir sind erfahrene Sicherheitsexperten mit langjähriger praktischer Erfahrung, angetrieben von einer starken Leidenschaft für Sicherheit, Wachsamkeit und Fachwissen. Unser Engagement für Spitzenleistungen gewährleistet die Bereitstellung erstklassiger Schutzdienstleistungen, die sorgfältig auf die vielfältigen Sicherheitsanforderungen verschiedener Branchen zugeschnitten sind. Mit einem umfassenden Verständnis von Risikomanagement, Überwachung und fortschrittlichen Sicherheitsprotokollen verfolgen wir einen proaktiven Ansatz zum Schutz von Menschen, Eigentum und Vermögenswerten. Unser Team ist mit modernster Technologie und bewährten Verfahren der Branche ausgestattet, sodass wir potenzielle Bedrohungen antizipieren und schnell auf Sicherheitsherausforderungen reagieren können. Ob Veranstaltungsschutz, Notfallmaßnahmen oder Facility Management – ​​wir streben danach, unseren Kunden eine sichere und sorgenfreie Umgebung zu bieten und ihnen bei jedem Schritt Sicherheit und Vertrauen zu vermitteln.",
      service: "Dienst",
      services: "Leistungen",
      SecurityServices: "Sicherheitsdienste",
      MoreSecurityServices: "Mehr Sicherheitsdienste",
      CleaningServices: "Reinigungsdienste",
      MoreCleaningServices: "Mehr Reinigungsdienste",
      Secrecy: "Kontaktieren Sie uns, um Geheimhaltung zu gewährleisten",
      SecrecyDescription:
        "Als wertvolle Partner in unserem Sicherheitsökosystem spielen Sie eine entscheidende Rolle bei der Aufrechterhaltung einer sicheren und sicheren Umgebung. Ihre Autorität, um wichtige Informationen bereitzustellen und zu verifizieren, erhöht die Effektivität unserer Dienste, indem sie einen proaktiven Ansatz zur Sicherheitsverwaltung verfolgen. Durch den aktiven Austausch von Daten in Echtzeit, einschließlich Sicherheitsüberwachungsdetails, Kameraaufnahmen und Störfällen, helfen Sie uns, Genauigkeit und Reaktionsfähigkeit bei der Behandlung potenzieller Bedrohungen zu gewährleisten. Diese direkte Verbindung zwischen Ihnen und unserer Sicherheitsinfrastruktur bietet mehrere wichtige Vorteile:",
      Contact: "Kontaktieren Sie uns",
      ContactText: "Kontakt",
      YourName: "Ihr Name",
      YourNamePlaceholder: "Was ist Ihr Name?",
      YourEmail: "Ihre E-Mail",
      YourEmailPlaceholder: "Was ist Ihre E-Mail?",
      YourMessage: "Ihre Nachricht",
      YourMessagePlaceholder: "Was ist Ihre Nachricht?",
      Send: "Senden",
      Reset: "Zurücksetzen",
      Success: "Nachricht erfolgreich gesendet",
      Error: "Etwas ist schief gelaufen",
      Footer: "© Alle Rechte vorbehalten",
      FacilityManagement: "Gebäudewartung",
      ContactInfo: "Kontakt",
      Phone: "Telefon",
      Email: "E-Mail",
      ManagingDirector: "Vorstandsvorsitzender",
      RegisterCourt: "Registergericht",
      RegisterCourtText: "Charlottenburg District Court, HRB 265621 B",
      VATIdentificationNumber: "Umsatzsteuer-Identifikationsnummer nach § 27 a UStG:",
      Responsible: "Verantwortlich nach § 18 Abs. 2 MStV:",
      RightsReserved: "Alle Rechte vorbehalten.",
      RightsReservedText: "Der Inhalt dieser Website ist urheberrechtlich geschützt. Ohne schriftliche Genehmigung von Sterniz GmbH darf der Inhalt dieser Seite nicht reproduziert, verarbeitet, dupliziert oder in irgendeiner Form mithilfe elektronischer Systeme vervielfältigt werden, es sei denn, es wird anders ausdrücklich angegeben.",
      Links: "Links zu externen Websites",
      LinksText: "Diese Website enthält Links zu externen Websites. Da diese Sites außerhalb unseres Einflusses liegen, können wir keine Verantwortung für deren Inhalt übernehmen.",
      Disclaimer: "Haftungsausschluss",
      DisclaimerText1: "Diese Website reflektiert den aktuellen Zustand eines laufenden Arbeitsprozesses. Obwohl die Informationen auf unseren Webseiten mit größter Sorgfalt zusammengestellt wurden, kann Sterniz GmbH die Vollständigkeit, Richtigkeit und Aktualität der Informationen nicht gewährleisten.",
      DisclaimerText2: "Ansprüche gegen Sterniz GmbH, die auf Schäden materieller oder immaterieller Art beruhen, die durch die Nutzung oder Nichtnutzung der bereitgestellten Informationen verursacht wurden oder durch falsche und unvollständige Informationen verursacht wurden, werden im Allgemeinen ausgeschlossen.",
      DisclaimerText3: "Es wurde alles in der Genauigkeit der Informationen und Links auf dieser Website geleistet. Jedoch aufgrund der Natur des Internets und der Risiken von Unterbrechungen oder Unterbrechungen in der Datenübertragung kann jede Haftung für die Nutzung der Informationen, Links oder deren Genauigkeit ausgeschlossen werden. Alle Informationen auf dieser Website sind nur für allgemeine Informationenzwecke bereitgestellt. Ein wesentlicher Teil der Informationen wird regelmäßig aktualisiert, um sicherzustellen, dass Sie die neueste Version zugänglich sind.",
      DisclaimerText4: "Wir behalten uns das Recht vor, die Informationen auf dieser Website ohne vorherige Ankündigung zu ändern. Alle Angebote sind nicht bindend und unterliegen Änderungen.",
      Trademarks: "Marken und Handelsnamen",
      TrademarksText: "Alle Marken und Handelsnamen, die auf dieser Website erwähnt werden, unterliegen den Vorschriften der anwendbaren Markenrechtsvorschriften und den Eigentumsrechten der jeweiligen registrierten Eigentümer.",
      LegalValidity: "Gültigkeit dieses Haftungsausschlusses",
      LegalValidityText: "Dieser Haftungsausschluss ist als Teil der Internetseite zu betrachten, die Sie zu dieser Seite verlinkt hat. Sollten Teile oder einzelne Formulierungen dieses Textes nicht mehr, nicht vollständig oder nicht mehr korrekt mit dem aktuellen Rechtsstand übereinstimmen, bleiben die verbleibenden Teile des Dokumentes unberührt in ihrem Inhalt und ihrer Gültigkeit.",
      SoftwareSolutions: "Softwarelösungen",
      SoftwareSolutionsText: "Entdecken Sie unsere innovative Softwarelösungen, die Ihre Geschäftseffizienz verbessern.",
      EmployeeManagementSystem: "Mitarbeiterverwaltungssystem",
      EmployeeManagementSystemText: "Unser Mitarbeiterverwaltungssystem vereinfacht die Personalverwaltung, automatiert die Anwesenheitsnachverfolgung und stellt eine effiziente Mitarbeiterverwaltung sicher.",
      AutomatedAttendancePayroll: "Automatisierte Anwesenheitsabrechnung und Lohnabrechnung",
      ShiftSchedulingEmployeeTracking: "Schichtplanung und Mitarbeiterverfolgung",
      PerformanceEvaluationReporting: "Leistungsbewertung und Berichtswesen",
      LearnMore: "Mehr erfahren",
      MoreSoftwareSolutionsComingSoon: "Weitere Softwarelösungen bald verfügbar",
      WhatWeOffer: "Was wir anbieten",
      CleaningServices: "Reinigungsdienste",
      SoftwareSolutions: "Softwarelösungen",
      FacilityManagement: "Gebäudewartung",
      PropertyProtection: "Eigentumsschutz",
      PropertyProtectionP: "Property Protection gewährleistet die Sicherheit von Wohn- und Gewerbeimmobilien, indem es durch fortschrittliche Sicherheitsmaßnahmen und Überwachung unbefugten Zugriff, Vandalismus und Diebstahl verhindert.",
      EventProtection: "Veranstaltungsschutz",
      EventProtectionP: "Der Veranstaltungsschutz gewährleistet die Sicherheit bei Veranstaltungen, indem er die Menschenmenge kontrolliert, unbefugten Zutritt verhindert und effektiv auf Notfälle reagiert.",
      CleaningAndService: "Reinigung und Service",
      CleaningAndServiceP: "Umfassende Reinigungslösungen, einschließlich Routinewartung, Tiefenreinigung und spezialisierter Dienstleistungen, die auf verschiedene Branchen zugeschnitten sind.",
      MaintenanceCleaning: "Unterhaltsreinigung",
      MaintenanceCleaningP: "Regelmäßige Reinigung sorgt für Sauberkeit und Hygiene in den Räumen und gewährleistet so die langfristige Instandhaltung von Gebäuden und Einrichtungen.",




      general_cleaning: {
        company: "Allgemeine Reinigung",
        title: "Umfassende Reinigungslösungen",
        result1: "Tägliche & wöchentliche Reinigung",
        result2: "Desinfektion & Hygienewartung",
        result3: "Umweltfreundliche Lösungen"
      },
      glass_cleaning: {
        company: "Glas- & Fassadenreinigung",
        title: "Klares & makelloses Glas",
        result1: "Streifenfreie Fensterreinigung",
        result2: "Hochhaus-Reinigungsdienste",
        result3: "Polieren von Glasoberflächen"
      },
      disinfectant_cleaning: {
        company: "Desinfektionsreinigung",
        title: "Gesundheits- & Sicherheitskonformität",
        result1: "Virus- & Bakterieneliminierung",
        result2: "Krankenhausdesinfektion",
        result3: "Sanitierung für Arbeitsplätze"
      },
      construction_cleaning: {
        company: "Baureinigung",
        title: "Nach-Bau-Aufräumarbeiten",
        result1: "Staub- & Schuttbeseitigung",
        result2: "Oberflächenpolieren & Waschen",
        result3: "Endabnahme-Reinigung"
      },
      industrial_cleaning: {
        company: "Industriereinigung",
        title: "Reinigungslösungen für Schwerlast",
        result1: "Maschinen- & Gerätepflege",
        result2: "Öl- & Fettentfernung",
        result3: "Werkstatt- & Lagerpflege"
      },



  "property_protection": {
    "company": "Eigentumsschutz",
    "title": "Schutz Ihrer Vermögenswerte",
    "result1": "Gewerbliche & Wohnsicherheit",
    "result2": "Erweiterte Alarm- & Überwachungssysteme",
    "result3": "Zugangskontrolle & Umfassender Schutz"
  },
  "event_protection": {
    "company": "Veranstaltungsschutz",
    "title": "Sichere & geschützte Veranstaltungen gewährleisten",
    "result1": "Crowd Control & Zugangskontrolle",
    "result2": "VIP- & Exekutivschutz",
    "result3": "Notfall-Reaktionsplanung"
  },
  "emergency_call_service_control_center": {
    "company": "Notruf- & Service-Kontrollzentrum",
    "title": "Schnelle Reaktion & 24/7 Überwachung",
    "result1": "Notfall-Dispatch & Unterstützung",
    "result2": "Live-Vorfallberichtserstattung",
    "result3": "Echtzeit-Überwachungskoordination"
  },
  "gatekeeper_reception_service": {
    "company": "Torwächter- & Empfangsdienst",
    "title": "Professionelle Zugangskontrolle",
    "result1": "Besucherüberprüfung & Registrierung",
    "result2": "Ausweis- & Zugangskartenverwaltung",
    "result3": "Lobbys & Eingangsüberwachung"
  },
  "fire_safety_security_service": {
    "company": "Brandschutz-Sicherheitsdienst",
    "title": "Brandgefahren verhindern",
    "result1": "Brandverhütung & Sicherheitstraining",
    "result2": "Brandmelde- & Löschsysteme",
    "result3": "Notfall-Evakuierungsplanung"
  },
  "department_store_detective": {
    "company": "Warenhausdetektiv",
    "title": "Einzelhandelsdiebstahl-Prävention",
    "result1": "Geheime Überwachung & Verlustprävention",
    "result2": "Diebstahlsprävention",
    "result3": "Geschäftssicherheit & Vorfallberichtserstattung"
  },
  "doorman": {
    "company": "Türsteher",
    "title": "Erste Sicherheitslinie",
    "result1": "Gastüberprüfung & Unterstützung",
    "result2": "Eingangs- & Ausgangsüberwachung",
    "result3": "Sicherheitspräsenz & Patrouille"
  },
  "mall_guard": {
    "company": "Mall Guard",
    "title": "Sichere Einkaufserlebnisse gewährleisten",
    "result1": "Überwachung & Sicherheitsstreifen",
    "result2": "Mengen- & Vorfallmanagement",
    "result3": "Notfallmanagement & Reaktion"
  },
  "construction_site_security": {
    "company": "Baustellen-Sicherheit",
    "title": "Schutz aktiver Baustellen",
    "result1": "24/7 Baustellenüberwachung & Zugangskontrolle",
    "result2": "Diebstahlschutz für Ausrüstung & Material",
    "result3": "Einbruchserkennung & schnelle Reaktion"
  },
        "serviceTitles": {
          "propertyProtection": "Eigentumsschutz",
          "eventProtection": "Veranstaltungsschutz",
          "emergencyCallServiceControlCenter": "Notruf- & Service-Kontrollzentrum",
          "gatekeeperReceptionService": "Torwächter- & Empfangsdienst",
          "fireSafetySecurityService": "Feuerwehr-Sicherheitsdienst",
          "departmentStoreDetective": "Warenhausdetektiv",
          "doorman": "Doorman",
          "mallGuard": "Mall Guard",
          "constructionSiteSecurity": "Baustellensicherheit"
        },
        "serviceDescriptions": {
          "safeguardingYourAssets": "Schutz Ihres Eigentums",
          "ensuringSecureSafeEvents": "Sichere & sichere Veranstaltungen gewährleisten",
          "rapidResponse247Monitoring": "Schnelle Reaktion & 24/7 Überwachung",
          "professionalAccessControl": "Professionelle Zugangskontrolle",
          "preventingFireHazards": "Brandgefahren vorbeugen",
          "retailTheftPrevention": "Einzelhandelsdiebstahlprävention",
          "firstLineSecurity": "Erste Sicherheitslinie",
          "ensuringSafeShoppingEnvironments": "Sichere Einkaufserlebnisse gewährleisten",
          "protectingActiveWorksites": "Schutz aktiver Baustellen"
        },
        "results": {
          "commercialResidentialSecurity": "Kommerzielle & Wohnsicherheit",
          "advancedAlarmMonitoringSystems": "Erweiterte Alarm- & Überwachungssysteme",
          "accessControlPerimeterProtection": "Zugangskontrolle & Perimeterschutz",
          "crowdControlAccessManagement": "Crowd Control & Zugangskontrolle",
          "VIPExecutiveProtection": "VIP- & Executive-Schutz",
          "emergencyResponsePlanning": "Notfallreaktionsplanung",
          "emergencyDispatchSupport": "Notfall-Einsatz & Unterstützung",
          "liveIncidentReporting": "Live Vorfallberichterstattung",
          "realTimeSurveillanceCoordination": "Echtzeit-Überwachungskoordination",
          "visitorVerificationRegistration": "Besucher-Überprüfung & Registrierung",
          "IDAccessBadgeManagement": "ID & Zugangskartenverwaltung",
          "lobbyEntranceSurveillance": "Lobby- & Eingangsüberwachung",
          "firePreventionSafetyTraining": "Brandprävention & Sicherheitsschulung",
          "fireAlarmSuppressionSystems": "Brandmelde- & Löschsysteme",
          "emergencyEvacuationPlanning": "Notfall-Evakuierungsplanung",
          "covertSurveillanceLossPrevention": "Verdeckte Überwachung & Verlustprävention",
          "shopliftingPrevention": "Ladendiebstahl-Prävention",
          "storeSafetyIncidentReporting": "Ladensicherheit & Vorfallbericht",
          "guestScreeningAssistance": "Gästekontrolle & Unterstützung",
          "entranceExitMonitoring": "Eingangs- & Ausgangskontrolle",
          "securityPresencePatrolling": "Sicherheitspräsenz & Patrouillen",
          "surveillanceSecurityPatrols": "Überwachung & Sicherheits-Patrouillen",
          "crowdIncidentManagement": "Mengen- & Vorfallmanagement",
          "emergencyHandlingResponse": "Notfallbehandlung & Reaktion",
          "siteMonitoringAccessControl": "Baustellen-Überwachung & Zugangskontrolle",
          "equipmentMaterialTheftPrevention": "Diebstahlprävention für Ausrüstung & Material",
          "intruderDetectionRapidResponse": "Einbrechererkennung & schnelle Reaktion"

      }
    },
  },
};

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: 'src/utils/cleaning-{{lng}}.json'
    }
  });

export default i18n;
