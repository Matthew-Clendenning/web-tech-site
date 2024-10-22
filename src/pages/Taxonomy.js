import React from 'react';
import '../styles/App.css';
import TaxonomyTable from '../components/TaxonomyTable.jsx'; // Adjust the import path as necessary

const taxonomyData = [
  {
    paper: 'Wellens, C. (2024, July 16). Are you ready for the new challenges of QUIC? — IWL. IWL. https://www.iwl.com/blog/new-challenges-of-quic',
    citation: 'IWL',
    problem: 'Challenges of QUIC protocol adoption and performance issues.',
    domain: 'Network Protocol',
    solution: 'Discussion on QUIC challenges and potential solutions.',
    approach: 'Analytical Review',
    evaluationMethodology: '',
    appDomain: '',
    securityMechanism: '',
  },
  {
    paper: 'Petryschuk, S. (2024, July 18). What is QUIC? Everything You Need to Know. Auvik. https://www.auvik.com/franklyit/blog/what-is-quic-protocol/',
    citation: 'Auvik',
    problem: 'Understanding QUIC protocol and its features.',
    domain: 'Network Protocol',
    solution: 'Comprehensive overview of QUIC.',
    approach: 'Informational',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'N/A'
  },
  {
    paper: 'Di Bari, F. (2024, May 29). QUIC protocol and Web Protection. Emsisoft Help. https://www.emsisoft.com/en/help/6410/quic-protocol-and-web-protection/',
    citation: 'Emsisoft Help',
    problem: 'Security concerns related to the QUIC protocol in web applications.',
    domain: 'Cybersecurity',
    solution: 'Proposal for improving QUIC security measures.',
    approach: 'Prescriptive',
    evaluationMethodology: 'N/A',
    appDomain: 'Web Security',
    securityMechanism: 'Improved security measures for QUIC'
  },
  {
    paper: 'Chatzoglou, E., Kouliaridis, V., Karopoulos, G.,  Kambourakis, G. (2022). Revisiting QUIC attacks: a comprehensive review on QUIC security and a hands-on study. International Journal of Information Security, 22(2), 347–365. https://doi.org/10.1007/s10207-022-00630-6',
    citation: 'International Journal of Information Security',
    problem: 'Security vulnerabilities and attacks targeting the QUIC protocol.',
    domain: 'Cybersecurity',
    solution: 'Comprehensive review of QUIC security vulnerabilities.',
    approach: 'Systematic Review',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'Vulnerability assessment'
  },
  {
    paper: 'Nguyen, P. H. (2022). LITERATURE REVIEW ON QUIC PROTOCOL AND ITS PERFORMANCE',
    citation: 'Tampere University',
    problem: 'Performance assessment of QUIC in different scenarios.',
    domain: 'Network Performance',
    solution: 'Literature review analyzing QUIC performance metrics.',
    approach: 'Literature Review',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'N/A'
  },
  {
    paper: 'Khalifeh, A., Mansour, M., Alouneh, S. (2021). QUIC transmission protocol: Test-bed design, implementation and experimental evaluation. Journal of Electrical Engineering, 72(1), 20–28. https://doi.org/10.2478/jee-2021-0003',
    citation: 'Journal of Electrical Engineering',
    problem: 'Design and implementation challenges of QUIC transmission protocol.',
    domain: 'Network Protocol',
    solution: 'Development of a QUIC testbed for performance evaluation.',
    approach: 'Experimental Setup',
    evaluationMethodology: 'Experimental Evaluation',
    appDomain: 'N/A',
    securityMechanism: 'N/A'
  },
  {
    paper: 'The Performance and Future of QUIC Protocol in the Modern Internet - Science Global Plos. (n.d.). http://ebooks.manu2sent.com/id/eprint/1034/',
    citation: 'Science Global Pios',
    problem: 'Future outlook and performance expectations of QUIC.',
    domain: 'Network Protocol',
    solution: 'Discussion on QUICs future performance capabilities.',
    approach: 'Analytical Review',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'N/A'
  },
  {
    paper: 'Evaluating QUIC Performance Over Web, Cloud Storage, and Video Workloads. (2022, June 1). IEEE Journals  Magazine | IEEE Xplore. https://ieeexplore.ieee.org/abstract/document/9646248',
    citation: 'IEEE Xplore',
    problem: 'Performance issues of QUIC in different application scenarios.',
    domain: 'Network Performance',
    solution: 'Performance evaluation of QUIC in various workloads',
    approach: 'Experimental Evaluation',
    evaluationMethodology: 'Experimental Evaluation',
    appDomain: 'Cloud, Web, Video',
    securityMechanism: 'N/A'
  },
  {
    paper: 'Exploring QUIC Security and Privacy: A Comprehensive Survey on QUIC Security and Privacy Vulnerabilities, Threats, Attacks and Future Research Directions. (n.d.). IEEE Journals  Magazine | IEEE Xplore. https://ieeexplore.ieee.org/document/10677379',
    citation: 'IEEE Xplore',
    problem: 'Security and privacy vulnerabilities in the QUIC protocol.',
    domain: 'Cybersecurity',
    solution: 'Survey of security and privacy issues associated with QUIC.',
    approach: 'Systematic Review',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'Vulnerability assessment'
  },
  {
    paper: 'Performance of the QUIC transport protocol over geostationary satellite links. (2023). IET Conference Publication | IEEE Xplore. https://ieeexplore.ieee.org/document/10572049',
    citation: 'IEEE Xplore',
    problem: 'Performance limitations of QUIC over satellite links.',
    domain: 'Network Performance',
    solution: 'Experimental evaluation of QUIC’s performance in satellite communications.',
    approach: 'Experimental Setup',
    evaluationMethodology: 'Experimental Evaluation',
    appDomain: 'Satellite',
    securityMechanism: 'N/A'
  },
  {
    paper: 'On the Experimental Assessment of QUIC and Congestion Control Schemes in Cellular Networks. (2021, June 15). IEEE Conference Publication | IEEE Xplore. https://ieeexplore.ieee.org/document/9501271',
    citation: 'IEEE Xplore',
    problem: 'Congestion control issues in QUIC over cellular networks.',
    domain: 'Network Performance',
    solution: 'Experimental assessment QUIC and congestion control algorithms.',
    approach: 'Experimental Setup',
    evaluationMethodology: 'Experimental Evaluation',
    appDomain: 'Cellular Networks',
    securityMechanism: 'N/A'
  },
  {
    paper: 'A Detail Survey on QUIC and its Impact on Network Data Transmission. (2022, April 28). IEEE Conference Publication | IEEE Xplore. https://ieeexplore.ieee.org/document/9777199',
    citation: 'IEEE Xplore',
    problem: 'Impact of QUIC on network data transmission efficiency.',
    domain: 'Network Performance',
    solution: 'Survey assessing QUIC’s impact on data transmission.',
    approach: 'Systematic Review',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'N/A'
  },
  {
    paper: 'A Preliminary Evaluation of QUIC for Mobile Serverless Edge Applications. (2021, June 1). IEEE Conference Publication | IEEE Xplore. https://ieeexplore.ieee.org/document/9469496',
    citation: 'IEEE Xplore',
    problem: 'Challenges of implementing QUIC in mobile serverless environments.',
    domain: 'Mobile Networks',
    solution: 'Preliminary evaluation of QUIC for edge applications.',
    approach: 'Experimental Setup',
    evaluationMethodology: 'Experimental Evaluation',
    appDomain: 'Mobile',
    securityMechanism: 'N/A'
  },
  {
    paper: 'Intrusion Detection on QUIC Traffic: A Machine Learning Approach. (2022, March 1). IEEE Conference Publication | IEEE Xplore. https://ieeexplore.ieee.org/document/9736342',
    citation: 'IEEE Xplore',
    problem: 'Need for instrusion detection mechanisms for QUIC traffic.',
    domain: 'Cybersecurity',
    solution: 'Implementation of machine learning techniques for QUIC traffic intrusion detection.',
    approach: 'Machine Learning',
    evaluationMethodology: 'Experimental Evaluation',
    appDomain: 'N/A',
    securityMechanism: 'Machine Learning Detection'
  },
  {
    paper: 'A Survey on the Security Issues of QUIC. (2022, October 24). IEEE Conference Publication | IEEE Xplore. https://ieeexplore.ieee.org/document/9955622',
    citation: 'IEEE Xplore',
    problem: 'Overview of security issues affecting QUIC',
    domain: 'Cybersecurity',
    solution: 'Comprehensive survey of security vulnerabilities in QUIC.',
    approach: 'Systematic Review',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'Vulnerability assessment'
  },
  {
    paper: 'Yang, T., Li, Q.,  Hu, F. (2024). Intelligent Congestion Control in QUIC for Reliable E2E Communication Network: A Digital Twin-Based Approach. 2024 IEEE/CIC International Conference on Communications in China (ICCC Workshops), Communications in China (ICCC Workshops), 2024 IEEE/CIC International Conference On, 282–287. https://doi-org.ezp.slu.edu/10.1109/ICCCWorkshops62562.2024.10693770',
    citation: 'IEEE/CIC International Conference',
    problem: 'Improving congestion control mechanisms for QUIC.',
    domain: 'Network Protocol',
    solution: 'Development of a digital twin-based approach for congestion control in QUIC.',
    approach: 'Proposed Framework',
    evaluationMethodology: 'Analytical Evaluation',
    appDomain: 'N/A',
    securityMechanism: 'N/A'
  },
  {
    paper: 'On the Performance of Transport Protocols Over mmWave Links: Empirical Comparison of TCP and QUIC. (2023). IEEE Journals  Magazine | IEEE Xplore. https://ieeexplore.ieee.org/document/10287645',
    citation: 'IEEE Xplore',
    problem: 'Performance comparison of TCP and QUIC over mmWave links.',
    domain: 'Network Performance',
    solution: 'Empirical analysis comparing TCP and QUIC performance.',
    approach: 'Empirical Analysis',
    evaluationMethodology: 'Experimental Evaluation',
    appDomain: 'mmWave Networks',
    securityMechanism: 'N/A'
  },
  {
    paper: 'QuicTor: Enhancing Tor for Real-Time Communication Using QUIC Transport Protocol. (2021). IEEE Journals  Magazine | IEEE Xplore. https://ieeexplore.ieee.org/document/9354777',
    citation: 'IEEE Xplore',
    problem: 'Enhancing Tors performance using QUIC for real-time communications.',
    domain: 'Network Protocol',
    solution: 'Proposal to enhance Tor using QUIC for improved performance.',
    approach: 'Proposed Framework',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'N/A'
  },
  {
    paper: 'Rochet, F. (2024, September 11). Improving encrypted transport protocol designs: Deep dive on the QUIC case. arXiv.org. https://arxiv.org/abs/2409.07138',
    citation: 'arXiv.org',
    problem: 'Limitations in existing encrypted transport protocols including QUIC.',
    domain: 'Network Protocol',
    solution: 'Proposed improvements for encrypted transport protocols.',
    approach: 'Analytical Review',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'N/A'
  },
  {
    paper: 'Adaptive Partially Reliable Delivery of Immersive Media Over QUIC-HTTP/3. (2023). IEEE Journals Magazine | IEEE Xplore. https://ieeexplore.ieee.org/document/10103593',
    citation: 'IEEE Xplore',
    problem: 'Challenges in delivering immersive media reliably over QUIC.',
    domain: 'Media Delivery',
    solution: 'Proposal for adaptive delivery mechanisms for immersive media over QUIC.',
    approach: 'Proposed Framework',
    evaluationMethodology: 'N/A',
    appDomain: 'Immersive Media',
    securityMechanism: 'N/A'
  },
  {
    paper: 'Robust QUIC: Integrating Practical Coding in a Low Latency Transport Protocol. (2021). IEEE Journals Magazine | IEEE Xplore. https://ieeexplore.ieee.org/document/9559926',
    citation: 'IEEE Xplore',
    problem: 'Need for improved reliability and efficiency in low latency transport protocols.',
    domain: 'Network Protocol',
    solution: 'Proposal to integrate practical coding techniques in QUIC for improved performance.',
    approach: 'Proposed Framwork',
    evaluationMethodology: 'N/A',
    appDomain: 'N/A',
    securityMechanism: 'N/A'
  },
  {
    paper: 'Formal Analysis of QUIC Handshake Protocol Using Symbolic Model Checking. (2021). IEEE Journals  Magazine | IEEE Xplore. https://ieeexplore.ieee.org/document/9328313',
    citation: 'IEEE Xplore',
    problem: 'Verification of security properties in QUIC handshake protocol.',
    domain: 'Cybersecurity',
    solution: 'Formal analysis of QUIC handshake using symbolic model checking techniques.',
    approach: 'Formal Verification',
    evaluationMethodology: 'Formal Analysis',
    appDomain: 'N/A',
    securityMechanism: 'Security Verification'
  },
];

function Taxonomy() {
  return (
    <>
      <TaxonomyTable data={taxonomyData} />
    </>
  );
}

export default Taxonomy;