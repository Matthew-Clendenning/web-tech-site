import React from 'react';
import '../styles/App.css';

const TaxonomyRow = ({ number, paper, citation, problem, domain, solution, approach, evaluationMethodology, appDomain, securityMechanism }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{paper}</td>
      <td>{citation}</td>
      <td>{problem}</td>
      <td>{domain}</td>
      <td>{solution}</td>
      <td>{approach}</td>
      <td>{evaluationMethodology || 'N/A'}</td>
      <td>{appDomain || 'N/A'}</td>
      <td>{securityMechanism || 'N/A'}</td>
    </tr>
  );
};

const TaxonomyTable = ({ data }) => {
  return (
    <div className="taxonomy-container">
      <h2 className="section-title">Taxonomy</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Paper</th>
            <th>Citation</th>
            <th>Problem</th>
            <th>Domain</th>
            <th>Solution</th>
            <th>Approach</th>
            <th>Evaluation Methodology</th>
            <th>App. Domain</th>
            <th>Security Mechanism</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TaxonomyRow
              key={index}
              number={index + 1}
              paper={row.paper}
              citation={row.citation}
              problem={row.problem}
              domain={row.domain}
              solution={row.solution}
              approach={row.approach}
              evaluationMethodology={row.evaluationMethodology}
              appDomain={row.appDomain}
              securityMechanism={row.securityMechanism}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxonomyTable;