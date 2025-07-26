import React from 'react'

export default function Publications() {

    const publications = [
    {
      title: "Adaptive Beamforming in Dynamic Urban Environments",
      description:
        "Explores real-time beamforming techniques for improving signal clarity and reducing multipath interference in dense metropolitan areas. The study introduces a novel adaptive matrix recalibration method for MIMO arrays.",
      links: [
        { name: "Download Abstract.pdf", href: "#" },
        { name: "Full Paper.pdf", href: "#" },
        { name: "Supplementary Data.pdf", href: "#" },
      ],
    },
    {
      title: "Cognitive Radio Networks: A Predictive Spectrum Allocation Framework",
      description:
        "This work presents a machine-learning-based model for real-time prediction of idle spectrum blocks, optimizing cognitive radio performance in fluctuating frequency environments.",
      links: [
        { name: "Overview.pdf", href: "#" },
        { name: "Technical Details.pdf", href: "#" },
        { name: "Simulation Results.pdf", href: "#" },
      ],
    },
    {
      title: "Low-Power Signal Detection Using Compressed Sensing Techniques",
      description:
        "Focuses on energy-efficient sensing strategies for embedded systems, using compressed sampling methods to retain signal fidelity while significantly reducing hardware complexity.",
      links: [
        { name: "DetectionTheory.pdf", href: "#" },
        { name: "CodeAppendix.pdf", href: "#" },
        { name: "ExperimentNotes.pdf", href: "#" },
      ],
    },
    {
      title: "Quantum-Secure Communication Protocols for IoT Devices",
      description:
        "Introduces a lightweight quantum-resistant encryption protocol specifically designed for constrained devices, enabling secure transmission over public 5G networks.",
      links: [
        { name: "Whitepaper.pdf", href: "#" },
        { name: "KeyExchangeProtocol.pdf", href: "#" },
        { name: "SecurityAudit.pdf", href: "#" },
      ],
    },
    {
      title: "Signal Intelligence in Emergency Response Networks",
      description:
        "Discusses the design and deployment of an AI-assisted signal intercept and prioritization system to aid first responders in disaster zones with degraded communication infrastructure.",
      links: [
        { name: "SystemDesign.pdf", href: "#" },
        { name: "CaseStudy_Haiti.pdf", href: "#" },
        { name: "FutureWork.pdf", href: "#" },
      ],
    },
  ];
  return (
     <div className="publications">
      <p>
        Below is a selection of Dr. Griner’s recent academic publications in the
        field of advanced wireless communication systems, cognitive radio, and signal intelligence.
      </p>

      <ul>
        {publications.map((pub, index) => (
          <li key={index} style={{ marginBottom: "2em" }}>
            <h3>{pub.title}</h3>
            <p>{pub.description}</p>
            <ul>
              {pub.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
