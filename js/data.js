var services = [
  {
    title: "health information exchange / interoperability",
    text: "<strong>What we do:</strong> Data exchange and interoperability strategic planning; vendor selection and technology implementation guidance; HIE management services; stakeholder outreach and engagement; governance and policy development focused on alignment with federal and state initiatives."
},
  {
    title: "population health data management / analytics",
    text: "<strong>What we do:</strong> Support providers, health systems, and community initiatives in realizing their goals for population health management. We draw upon our expertise in health IT, systems architecture design, and clinical data research networks."
},
  {
    title: "Clinical Data Research Networks",
    text: "<strong>What We Do:</strong> Provide guidance to emerging clinical data research networks on governance, policy, and technology alignment. Facilitate partnerships beyond research-oriented academic medical centers to include health systems, payers, health information exchange organizations, and community clinics."
},
  {
    title: "Data Strategies for Managed Care",
    text: "<strong>What We Do:</strong> Support health care organizations in developing and implementing the data infrastructure required to succeed in managed care and value-based payment environments. We advise on strategies and tactics for health data analytics, care coordination, and care management."
},
  {
    title: "it privacy, security, and infrastructure development",
    text: "<strong>What we do:</strong> Guidance on the development and implementation of IT privacy and security policies, protocols, and technical infrastructure for large and small-scale EHR and/or HIE projects, such as HIPAA OMNIBUS rule compliance and HITECH Act data exchange security provisions; standards-driven solutions architecting for data exchange infrastructures."

},
  {
    title: "meaningful use of electronic health records (ehrs)",
    text: "<strong>What we do:</strong> Support providers in meeting Meaningful Use requirements, especially Stage 2 requirements related to data exchange including Transitions of Care and:"
},
  {
    title: "public health reporting",
    text: "<strong>What we do:</strong> Assessments of providers’ current capabilities and needs for the electronic submission of data; guidance on efficiently meeting local, state, and federal requirements including Meaningful Use; vendor selection; system integration/implementation.",
    indented: true
},
  {
    title: "patient engagement and access to information",
    text: "<strong>What we do:</strong> Assessments of providers’ current capabilities and needs; guidance on 2014 Meaningful Use requirements for stages 1 and 2; recommend technical approaches; facilitate effective patient engagement and data sharing; promote and configure low-cost options using personal health records and Direct.",
    indented: true
}
];





var clients2014 = [
  {
    name: "Axesson",
    content: "Axesson delivers health information exchange and analytic solutions enabling clinical connectivity. Axesson’s ClearExchange® platform powers the Santa Cruz HIE, one of the longest-running HIE ventures in the country. Axesson recently launched <a href='http://www.californiadirect.org/' class='bolder' target='_external' >California Direct</a>, a publicly funded platform for simple, secure exchange utilizing Direct technology standards.",
    link: "http://axesson.com/",
    url: "axesson.com",
    img: "./images/axesson.png"
},
  {
    name: "California Health Information Partnership & Services Organization",
    content: "A joint, not-for-profit venture between the California Primary Care Association (CPCA), the California Medical Association (CMA), and the California Association of Public Hospitals and Health Systems (CAPH), the California Health Information Partnership & Services Organization (CalHIPSO) is the largest ONC Regional Extension Center in the country. Serving 56 of California’s 58 counties, CalHIPSO’s market stretches across the state in both urban and rural areas. To date, CalHIPSO has successfully assisted over 9000 California providers in attesting to Stage 1 of the Federal Electronic Health Record Meaningful Use Program.",
    link: "http://calhipso.org/",
    url: "calhipso.org/",
    img: "./images/calhipso.jpg",
    imgClass: "short"
},
  {
    name: "California Telehealth Network",
    content: 'The mission of the California Telehealth Network is to promote advanced information technologies and services to improve access to high quality healthcare, especially among medically underserved and rural Californians. CTN is California’s authorized FCC broadband consortia for healthcare with priority access to the FCC’s Healthcare Connect fund for California healthcare providers.',
    link: "http://www.caltelehealth.org",
    url: "caltelehealth.org",
    img: './images/californiatelehealthnetwork.png'
},
  {
    name: "National Association for Trusted Exchange (NATE)",
    content: "National Association for Trusted Exchange (NATE) brings the expertise of state programs together to find common solutions that optimize appropriate exchange of health information for greater gains in adoption and outcomes.  Emerging from a pilot project supported by the Office of the National Coordinator for Health Information Technology named the Western States Consortium, NATE was established as a not-for-profit incorporated in Washington, D.C. on May 1, 2013.",
    link: "http://nate-trust.org",
    url: "nate-trust.org",
    img: "./images/nate.png"
},
  {
    name: "RAND Corporation",
    content: "The RAND Corporation is a research organization that develops solutions to public policy challenges to help make communities throughout the world safer and more secure, healthier and more prosperous. RAND is nonprofit, nonpartisan, and committed to the public interest.",
    link: "http://www.rand.org/",
    url: "rand.org",
    img: "./images/rand.png",
    imgClass: "tall"
}
];


var clients2015 = [
  {
    name: "California Department of Public Health ",
    content: "The Chronic Disease Control Branch (CDCB) of the California Department of Public Health advances initiatives leading to the prevention and management of chronic diseases to promote a lifetime of wellness for all Californians. Intrepid Ascent has been engaged to provide technical assistance to ten County health departments participating in a CDC-funded program to monitor and improve cardiovascular disease and diabetes outcomes.",
    link: "http://www.cdph.ca.gov/",
    url: "cdph.ca.gov/",
    img: "./images/cdph.png"
  },
  {
    name: "California HealthCare Foundation",
    content: "The California HealthCare Foundation is a leading supporter of innovative methods to improve healthcare delivery and outcomes in California. Intrepid Ascent has been engaged to conduct an assessment of the data infrastructure for population health management among organizations in the medical “safety net” serving the state’s most vulnerable residents.",
    link: "http://www.chcf.org/",
    url: "chcf.org/",
    img: "./images/chf.png"
  },
  {
    name: "The Central Valley Collaborative",
    content: "The Central Valley Collaborative (CVC) supports a network of Federally Qualified Health Centers primarily located in California’s Central Valley on innovative health IT projects and high-impact quality improvement initiatives. Intrepid Ascent has been engaged to coordinate the implementation of a patient portal and to facilitate strategic health information exchange and interoperability projects.",
    link: "http://hitacademy.org/cvc/",
    url: "hitacademy.org/cvc/",
    img: "./images/cvc.png",
    imgClass: ""
},
  {
    name: "COPE Health Solutions",
    content: "COPE Health Solutions is a leading healthcare corporation based in Los Angeles, California. COPE partners with hospitals, physician groups, health plans, clinics and other health care organizations to help them achieve visionary, market relevant health care solutions. Intrepid Ascent has been engaged to provide health IT strategic planning expertise for Performing Provider Systems in New York State funded through the Delivery System Reform Incentive Payment (DSRIP) program. New York will receive $8 billion from CMS for DSRIP over five years, with the goal of enabling high-quality integrated care for Medicaid beneficiaries in the state.",
    link: "http://www.copehealthsolutions.org/",
    url: "copehealthsolutions.org/",
    img: "./images/cope.png",
    imgClass: ""
},
  {
    name: "Marin County HHS",
    content: "Marin Health & Human Services promotes and protects the health, well-being, self-sufficiency, and safety of all people in Marin County. Intrepid Ascent has been engaged since early 2014 to assist in the assessment, planning, and development of data-exchange and interoperability capabilities both within the HHS enterprise and in the local medical community. HHS seeks to improve public health outcomes in the County through IT-enabled care coordination and data management.",
    link: "http://www.marinhhs.org/",
    url: "marinhhs.org/",
    img: "./images/marinhealth.png",
    imgClass: ""
},
  {
    name: "Robinson & Associates Consulting",
    content: "Robinson & Associates (RAA) provides specialized consulting services to accelerate strategic initiatives and advance innovative practices, policies, and technologies in health information technology and exchange. With a flexible approach to bringing together subject-matter experts on specific projects, RAA provides deep expertise to address complex issues in health IT. Intrepid Ascent has been engaged on multiple RAA projects in Oregon, California, and Arizona, including physical-behavioral health integration initiatives and data interoperability projects facilitating standards-based data portability between major health systems and employer-based health centers.",
    link: "http://raaconsult.com/Home",
    url: "raaconsult.com/",
    img: "./images/robinson.png",
    imgClass: ""
},
  {
    name: "San Joaquin Community Health Information Exchange",
    content: "The San Joaquin Community HIE (SJCHIE) is a not-for-profit community effort jointly founded by San Joaquin General Hospital, the San Joaquin County Department of Health and Human Services, Community Medical Centers (CMC), and the Health Plan of San Joaquin. SJCHIE’s mission is to promote the holistic well-being of the members of the San Joaquin County community through the secure exchange of health information. Mark Elson of Intrepid Ascent serves as the organization’s Executive Director.",
    link: "http://www.sjchie.org/",
    url: "sjchie.org/",
    img: "./images/healthinformation.png",
    imgClass: ""
},
  {
    name: "The University of Southern California, Keck School of Medicine",
    content: "The Keck School of Medicine is home to the Keck Medical Center of USC, a state-of-the-art academic medical center, and a number of research institutes. Intrepid Ascent has been engaged to support the Clinical Research Informatics Program within the Southern California Clinical and Translational Science Institute. We are focused on initiatives such as the Patient-Centered Scalable National Network for Effectiveness Research (pSCANNER), a PCORI-funded clinical data research network with over 24 million patient lives.",
    link: "http://keck.usc.edu/",
    url: "keck.usc.edu/",
    img: "./images/keck.png",
    imgClass: ""
},
];


old = [
  {
    name: "23Eleven, LLC",
    content: "2311 works with multiple collaborative efforts to deliver on the promise of health Information exchange. Working closely with private, state, and federal clients who are committed to interoperable technology and policy across states and nationwide, 2311 delivers comprehensive health information exchange policy and technology expertise.",
    link: "http://23eleven.net",
    url: "23eleven.net",
    img: ""
},
  {
    name: "Marin Health & Human Services",
    content: "Marin Health & Human Services promotes and protects the health, well-being, self-sufficiency, and safety of all people in Marin County.",
    link: "http://marinhhs.org",
    url: "marinhhs.org",
    img: "./images/marinhealthandhumanservices.png"
},
  {
    name: "San Joaquin Community Health Information Exchange",
    content: "The San Joaquin Community HIE (SJCHIE) is a not-for-profit community effort jointly founded by San Joaquin General Hospital, the San Joaquin County Department of Health and Human Services, Community Medical Centers (CMC), and the Health Plan of San Joaquin. The exchange’s mission is to promote the holistic well-being of the members of the San Joaquin County community through the secure exchange of all health information. SJCHIE contracts with Inland Empire HIE to utilize its data exchange platform from Orion Health.",
    link: "",
    url: "",
    img: "./images/sanjoaquin.jpg"
}
];
var quotes = [
  {
    text: "The digital world has been in a separate orbit from our medical cocoon, and it’s time the boundaries be taken down.",
    author: "Eric Topol"
},
  {
    text: "Interoperability must be addressed now, or else widespread adoption of stand-alone EHRs will be a fait accompli.",
    author: "David Brailer, 2005"
},
  {
    text: "Over-architected HIE approaches hit a CIO where it hurts most… Better to proceed with achievable steps that deliver incremental value along the way.",
    author: "Micky Tripathi"
},
  {
    text: "Our longer term vision is that every healthcare interaction benefits from all the world’s knowledge. Every encounter that generates knowledge should add to the world’s knowledge.",
    author: "Farzad Mostashari",
    longer: "true"
},
  {
    text: "Just because I have a fitness app on my phone doesn’t make me an athlete.",
    author: "Harry Greenspan",
    strech: true
}
];