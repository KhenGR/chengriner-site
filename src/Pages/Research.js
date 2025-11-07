/*import '../Style/MainGrid.css';*/
import React from 'react'

export default function Research() {
   return (
    <div class="research-section">
  <p>My research has been on <strong>reconfigurable datacenter networks</strong> or, <a href={"https://dl.acm.org/doi/10.1145/3708980"} target="_blank" rel="noopener noreferrer">RDCNs</a>.</p>

  <p>
    Today, datacenters are at the forefront of many technological advancements. Traditionally, datacenter networks, based on electrical packet switches, maintain a static topology, often some kind of CLOS topology, e.g. <a href={"https://en.wikipedia.org/wiki/Fat_tree"} target="_blank" rel="noopener noreferrer">Fat trees</a>.
  </p>

  <p>
    RDCNs use reconfigurable optical circuit switches which allow the topology to change in real time and with very short delays.
    These networks have many benefits over traditional networks. They offer better throughput, lower costs, greater flexibility, and other advantages.
  </p>

  <p>Research areas for RDCNs are broad and include questions such as:</p>
  <ul>
    <li>
      The topology of RDCNs is a dynamic, evolving graph, what are the best ways to govern the changes in the topology? Should these changes be based on traffic patterns in the network, or should they ignore them?
    </li>
    <li>
      How should traffic routing be controlled in such networks? Traditional routing algorithms often cannot handle frequent topology changes.
    </li>
    <li>
      How should congestion be controlled? Traditional congestion control algorithms are not designed for frequent path changes.
    </li>
    <li>
      How can traffic in RDCNs be predicted and simulated?
    </li>
  </ul>

  <p>
    Each of these areas raises many open questions that draw from diverse disciplines such as
    graph theory, information theory, and online algorithms.
  </p>

  <p>
    My research interests revolve around solving some of these problems.
    My research interests revolve around solving some these problems. I am particularly interested in using methods from other disciplines to research these problems such as modeling with ML tools and others.
  </p>
</div>
  
  )
}
