const nodes = [
  ["Power Apps", "orbit-node n1"],
  ["Dataverse", "orbit-node n2"],
  ["PCF", "orbit-node n3"],
  ["C#", "orbit-node n4"],
  ["Automate", "orbit-node n5"],
  ["Azure", "orbit-node n6"],
];

export function CapabilityOrbit() {
  return (
    <div className="capability-orbit" aria-label="Power Platform engineering capability map">
      <div className="orbit-glow" />
      <div className="orbit-ring ring-one" />
      <div className="orbit-ring ring-two" />
      <div className="orbit-ring ring-three" />
      <div className="orbit-core">
        <span>POWER</span>
        <strong>PLATFORM</strong>
        <small>ENGINEERING</small>
      </div>
      {nodes.map(([label, className]) => <div key={label} className={className}>{label}</div>)}
      <div className="orbit-signal signal-a" />
      <div className="orbit-signal signal-b" />
    </div>
  );
}
