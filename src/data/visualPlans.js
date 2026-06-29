export const visualPlans = [
  {
    "id": "potential-graph-1",
    "title": "Electrostatic Potential Visual",
    "category": "Graph",
    "diagramType": "potential-graph",
    "shows": "A code-drawn visual for Electrostatic Potential showing variables, direction or graph behavior.",
    "labels": [
      "V",
      "W",
      "q0"
    ],
    "concept": "Potential is work done per unit positive test charge in bringing it from infinity to a point.",
    "removesConfusion": "Potential is scalar; do not attach field direction to V.",
    "manual": "Draw a clean labelled sketch for Electrostatic Potential, then write V = W/q0 below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "Graph-based",
    "implementation": "DiagramRenderer type \"potential-graph\" builds this visual with free SVG only."
  },
  {
    "id": "point-potential-2",
    "title": "Potential Difference Visual",
    "category": "Diagram",
    "diagramType": "point-potential",
    "shows": "A code-drawn visual for Potential Difference showing variables, direction or graph behavior.",
    "labels": [
      "VB",
      "-",
      "VA",
      "WAB",
      "q0"
    ],
    "concept": "Potential difference is work done per unit charge in moving charge between two points.",
    "removesConfusion": "Sign depends on chosen initial and final points.",
    "manual": "Draw a clean labelled sketch for Potential Difference, then write VB - VA = WAB/q0 below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"point-potential\" builds this visual with free SVG only."
  },
  {
    "id": "equipotential-3",
    "title": "Electric Field and Potential Relation Visual",
    "category": "Diagram",
    "diagramType": "equipotential",
    "shows": "A code-drawn visual for Electric Field and Potential Relation showing variables, direction or graph behavior.",
    "labels": [
      "E",
      "-dV",
      "dr"
    ],
    "concept": "Electric field points in the direction of maximum decrease of potential.",
    "removesConfusion": "The negative sign is physical, not decorative.",
    "manual": "Draw a clean labelled sketch for Electric Field and Potential Relation, then write E = -dV/dr below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"equipotential\" builds this visual with free SVG only."
  },
  {
    "id": "two-charge-potential-4",
    "title": "Potential Due to Point Charge Visual",
    "category": "Diagram",
    "diagramType": "two-charge-potential",
    "shows": "A code-drawn visual for Potential Due to Point Charge showing variables, direction or graph behavior.",
    "labels": [
      "V",
      "kQ",
      "r"
    ],
    "concept": "Potential of a point charge varies inversely with distance and carries the sign of charge.",
    "removesConfusion": "Potential can be negative; field magnitude cannot.",
    "manual": "Draw a clean labelled sketch for Potential Due to Point Charge, then write V = kQ/r below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"two-charge-potential\" builds this visual with free SVG only."
  },
  {
    "id": "dipole-energy-5",
    "title": "Potential Due to System of Charges Visual",
    "category": "Diagram",
    "diagramType": "dipole-energy",
    "shows": "A code-drawn visual for Potential Due to System of Charges showing variables, direction or graph behavior.",
    "labels": [
      "V",
      "V1",
      "V2",
      "..."
    ],
    "concept": "Net potential is algebraic sum of individual potentials.",
    "removesConfusion": "Add potentials as scalars, unlike fields.",
    "manual": "Draw a clean labelled sketch for Potential Due to System of Charges, then write V = V1 + V2 + ... below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dipole-energy\" builds this visual with free SVG only."
  },
  {
    "id": "conductor-equipotential-6",
    "title": "Equipotential Surfaces Visual",
    "category": "Diagram",
    "diagramType": "conductor-equipotential",
    "shows": "A code-drawn visual for Equipotential Surfaces showing variables, direction or graph behavior.",
    "labels": [
      "W",
      "q",
      "DeltaV",
      "0"
    ],
    "concept": "An equipotential surface has same potential everywhere and no work is done along it.",
    "removesConfusion": "Electric field is perpendicular to equipotential surfaces.",
    "manual": "Draw a clean labelled sketch for Equipotential Surfaces, then write W = q DeltaV = 0 below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"conductor-equipotential\" builds this visual with free SVG only."
  },
  {
    "id": "capacitor-plates-7",
    "title": "Work Done in Electrostatic Field Visual",
    "category": "Diagram",
    "diagramType": "capacitor-plates",
    "shows": "A code-drawn visual for Work Done in Electrostatic Field showing variables, direction or graph behavior.",
    "labels": [
      "W",
      "q",
      "VB",
      "-",
      "VA"
    ],
    "concept": "Work in electrostatics depends only on initial and final points.",
    "removesConfusion": "Do not use path length for conservative electrostatic work.",
    "manual": "Draw a clean labelled sketch for Work Done in Electrostatic Field, then write W = q(VB - VA) below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"capacitor-plates\" builds this visual with free SVG only."
  },
  {
    "id": "dielectric-8",
    "title": "Potential Energy of Two Charges Visual",
    "category": "Diagram",
    "diagramType": "dielectric",
    "shows": "A code-drawn visual for Potential Energy of Two Charges showing variables, direction or graph behavior.",
    "labels": [
      "U",
      "kq1q2",
      "r"
    ],
    "concept": "Two-charge potential energy measures work stored in assembling the pair.",
    "removesConfusion": "Like charges have positive U; unlike charges have negative U.",
    "manual": "Draw a clean labelled sketch for Potential Energy of Two Charges, then write U = kq1q2/r below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dielectric\" builds this visual with free SVG only."
  },
  {
    "id": "polarization-9",
    "title": "Potential Energy of a System Visual",
    "category": "Diagram",
    "diagramType": "polarization",
    "shows": "A code-drawn visual for Potential Energy of a System showing variables, direction or graph behavior.",
    "labels": [
      "U",
      "sum",
      "kij",
      "qi",
      "qj"
    ],
    "concept": "Total potential energy is sum over every distinct pair of charges.",
    "removesConfusion": "Count each pair once only.",
    "manual": "Draw a clean labelled sketch for Potential Energy of a System, then write U = sum kij qi qj/rij below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"polarization\" builds this visual with free SVG only."
  },
  {
    "id": "series-capacitors-10",
    "title": "Dipole Potential Energy Visual",
    "category": "Diagram",
    "diagramType": "series-capacitors",
    "shows": "A code-drawn visual for Dipole Potential Energy showing variables, direction or graph behavior.",
    "labels": [
      "U",
      "-pE",
      "cos",
      "theta"
    ],
    "concept": "A dipole in uniform field has orientation-dependent energy.",
    "removesConfusion": "Theta is angle between p and E.",
    "manual": "Draw a clean labelled sketch for Dipole Potential Energy, then write U = -pE cos theta below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"series-capacitors\" builds this visual with free SVG only."
  },
  {
    "id": "parallel-capacitors-11",
    "title": "Conductors as Equipotentials Visual",
    "category": "Diagram",
    "diagramType": "parallel-capacitors",
    "shows": "A code-drawn visual for Conductors as Equipotentials showing variables, direction or graph behavior.",
    "labels": [
      "E_inside",
      "0,",
      "V",
      "constant"
    ],
    "concept": "A conductor in electrostatic equilibrium has constant potential throughout its volume and surface.",
    "removesConfusion": "Zero internal field does not mean zero potential.",
    "manual": "Draw a clean labelled sketch for Conductors as Equipotentials, then write E_inside = 0, V = constant below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"parallel-capacitors\" builds this visual with free SVG only."
  },
  {
    "id": "energy-capacitor-12",
    "title": "Capacitance Visual",
    "category": "Diagram",
    "diagramType": "energy-capacitor",
    "shows": "A code-drawn visual for Capacitance showing variables, direction or graph behavior.",
    "labels": [
      "C",
      "Q",
      "V"
    ],
    "concept": "Capacitance is charge stored per unit potential difference.",
    "removesConfusion": "Capacitance depends on geometry and medium, not on Q alone.",
    "manual": "Draw a clean labelled sketch for Capacitance, then write C = Q/V below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"energy-capacitor\" builds this visual with free SVG only."
  },
  {
    "id": "energy-density-13",
    "title": "Isolated Spherical Conductor Visual",
    "category": "Diagram",
    "diagramType": "energy-density",
    "shows": "A code-drawn visual for Isolated Spherical Conductor showing variables, direction or graph behavior.",
    "labels": [
      "C",
      "4",
      "pi",
      "epsilon0",
      "R"
    ],
    "concept": "An isolated conducting sphere has capacitance proportional to radius.",
    "removesConfusion": "A larger sphere stores more charge at same potential.",
    "manual": "Draw a clean labelled sketch for Isolated Spherical Conductor, then write C = 4 pi epsilon0 R below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"energy-density\" builds this visual with free SVG only."
  },
  {
    "id": "sphere-capacitance-14",
    "title": "Parallel Plate Capacitor Visual",
    "category": "Diagram",
    "diagramType": "sphere-capacitance",
    "shows": "A code-drawn visual for Parallel Plate Capacitor showing variables, direction or graph behavior.",
    "labels": [
      "C",
      "epsilon0",
      "A",
      "d"
    ],
    "concept": "For parallel plates, capacitance increases with area and decreases with separation.",
    "removesConfusion": "Formula assumes edge effects are negligible.",
    "manual": "Draw a clean labelled sketch for Parallel Plate Capacitor, then write C = epsilon0 A/d below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"sphere-capacitance\" builds this visual with free SVG only."
  },
  {
    "id": "battery-connected-15",
    "title": "Dielectric in Capacitor Visual",
    "category": "Diagram",
    "diagramType": "battery-connected",
    "shows": "A code-drawn visual for Dielectric in Capacitor showing variables, direction or graph behavior.",
    "labels": [
      "C",
      "K",
      "epsilon0",
      "A",
      "d"
    ],
    "concept": "A dielectric increases capacitance by reducing effective field for same free charge.",
    "removesConfusion": "K is dimensionless dielectric constant.",
    "manual": "Draw a clean labelled sketch for Dielectric in Capacitor, then write C = K epsilon0 A/d below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"battery-connected\" builds this visual with free SVG only."
  },
  {
    "id": "battery-disconnected-16",
    "title": "Dielectric Polarization Visual",
    "category": "Diagram",
    "diagramType": "battery-disconnected",
    "shows": "A code-drawn visual for Dielectric Polarization showing variables, direction or graph behavior.",
    "labels": [
      "E",
      "E0",
      "K"
    ],
    "concept": "Dielectric molecules polarize in electric field, reducing net field inside material.",
    "removesConfusion": "Polarization is not free-charge conduction.",
    "manual": "Draw a clean labelled sketch for Dielectric Polarization, then write E = E0/K below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"battery-disconnected\" builds this visual with free SVG only."
  },
  {
    "id": "plate-force-17",
    "title": "Capacitors in Series Visual",
    "category": "Diagram",
    "diagramType": "plate-force",
    "shows": "A code-drawn visual for Capacitors in Series showing variables, direction or graph behavior.",
    "labels": [
      "1",
      "Ceq",
      "1",
      "C1",
      "1"
    ],
    "concept": "Series capacitors carry same charge and equivalent capacitance decreases.",
    "removesConfusion": "Series equivalent is smaller than smallest capacitor.",
    "manual": "Draw a clean labelled sketch for Capacitors in Series, then write 1/Ceq = 1/C1 + 1/C2 + ... below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"plate-force\" builds this visual with free SVG only."
  },
  {
    "id": "vandegraaff-18",
    "title": "Capacitors in Parallel Visual",
    "category": "Diagram",
    "diagramType": "vandegraaff",
    "shows": "A code-drawn visual for Capacitors in Parallel showing variables, direction or graph behavior.",
    "labels": [
      "Ceq",
      "C1",
      "C2",
      "..."
    ],
    "concept": "Parallel capacitors have same potential difference and capacitances add.",
    "removesConfusion": "Parallel equivalent is larger than largest capacitor.",
    "manual": "Draw a clean labelled sketch for Capacitors in Parallel, then write Ceq = C1 + C2 + ... below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"vandegraaff\" builds this visual with free SVG only."
  },
  {
    "id": "capacitance-graph-19",
    "title": "Energy Stored in Capacitor Visual",
    "category": "Graph",
    "diagramType": "capacitance-graph",
    "shows": "A code-drawn visual for Energy Stored in Capacitor showing variables, direction or graph behavior.",
    "labels": [
      "U",
      "1",
      "2",
      "CV^2",
      "Q^2"
    ],
    "concept": "A charged capacitor stores electrostatic energy in its electric field.",
    "removesConfusion": "Choose energy form based on what is constant.",
    "manual": "Draw a clean labelled sketch for Energy Stored in Capacitor, then write U = 1/2 CV^2 = Q^2/(2C) below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "Graph-based",
    "implementation": "DiagramRenderer type \"capacitance-graph\" builds this visual with free SVG only."
  },
  {
    "id": "trap-map-20",
    "title": "Energy Density in Electric Field Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A code-drawn visual for Energy Density in Electric Field showing variables, direction or graph behavior.",
    "labels": [
      "u",
      "1",
      "2",
      "epsilon0",
      "E^2"
    ],
    "concept": "Energy per unit volume in electric field is proportional to E squared.",
    "removesConfusion": "With dielectric, replace epsilon0 by epsilon when appropriate.",
    "manual": "Draw a clean labelled sketch for Energy Density in Electric Field, then write u = 1/2 epsilon0 E^2 below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" builds this visual with free SVG only."
  },
  {
    "id": "potential-graph-21",
    "title": "Battery Connected Capacitor Visual",
    "category": "Graph",
    "diagramType": "potential-graph",
    "shows": "A code-drawn visual for Battery Connected Capacitor showing variables, direction or graph behavior.",
    "labels": [
      "Q",
      "CV,",
      "U",
      "1",
      "2"
    ],
    "concept": "When battery remains connected, voltage stays constant.",
    "removesConfusion": "If dielectric is inserted with battery connected, charge increases.",
    "manual": "Draw a clean labelled sketch for Battery Connected Capacitor, then write Q = CV, U = 1/2 CV^2 below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "Graph-based",
    "implementation": "DiagramRenderer type \"potential-graph\" builds this visual with free SVG only."
  },
  {
    "id": "point-potential-22",
    "title": "Battery Disconnected Capacitor Visual",
    "category": "Diagram",
    "diagramType": "point-potential",
    "shows": "A code-drawn visual for Battery Disconnected Capacitor showing variables, direction or graph behavior.",
    "labels": [
      "V",
      "Q",
      "C,",
      "U",
      "Q^2"
    ],
    "concept": "When isolated, capacitor charge remains constant.",
    "removesConfusion": "If dielectric is inserted after disconnection, voltage decreases.",
    "manual": "Draw a clean labelled sketch for Battery Disconnected Capacitor, then write V = Q/C, U = Q^2/(2C) below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"point-potential\" builds this visual with free SVG only."
  },
  {
    "id": "equipotential-23",
    "title": "Force Between Capacitor Plates Visual",
    "category": "Diagram",
    "diagramType": "equipotential",
    "shows": "A code-drawn visual for Force Between Capacitor Plates showing variables, direction or graph behavior.",
    "labels": [
      "F",
      "A",
      "1",
      "2",
      "epsilon0"
    ],
    "concept": "Oppositely charged plates attract each other due to electric field pressure.",
    "removesConfusion": "Use energy method carefully with fixed Q or fixed V.",
    "manual": "Draw a clean labelled sketch for Force Between Capacitor Plates, then write F/A = 1/2 epsilon0 E^2 below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"equipotential\" builds this visual with free SVG only."
  },
  {
    "id": "two-charge-potential-24",
    "title": "Van de Graaff Generator Visual",
    "category": "Diagram",
    "diagramType": "two-charge-potential",
    "shows": "A code-drawn visual for Van de Graaff Generator showing variables, direction or graph behavior.",
    "labels": [
      "V",
      "kQ",
      "R"
    ],
    "concept": "Van de Graaff uses charge transfer to build very high potential on a large conducting dome.",
    "removesConfusion": "High voltage does not always mean large current.",
    "manual": "Draw a clean labelled sketch for Van de Graaff Generator, then write V = kQ/R below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"two-charge-potential\" builds this visual with free SVG only."
  },
  {
    "id": "dipole-energy-25",
    "title": "Potential Graphs Visual",
    "category": "Diagram",
    "diagramType": "dipole-energy",
    "shows": "A code-drawn visual for Potential Graphs showing variables, direction or graph behavior.",
    "labels": [
      "E",
      "-slope",
      "of",
      "V-r",
      "graph"
    ],
    "concept": "Potential graphs reveal sign, slope and relation to electric field.",
    "removesConfusion": "Steeper V graph means stronger field magnitude.",
    "manual": "Draw a clean labelled sketch for Potential Graphs, then write E = -slope of V-r graph below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dipole-energy\" builds this visual with free SVG only."
  },
  {
    "id": "conductor-equipotential-26",
    "title": "Capacitance Graphs Visual",
    "category": "Diagram",
    "diagramType": "conductor-equipotential",
    "shows": "A code-drawn visual for Capacitance Graphs showing variables, direction or graph behavior.",
    "labels": [
      "Q",
      "CV"
    ],
    "concept": "Capacitor graphs connect Q-V slope, C-d inverse relation and energy area.",
    "removesConfusion": "Area under V-Q graph gives stored energy.",
    "manual": "Draw a clean labelled sketch for Capacitance Graphs, then write Q = CV below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"conductor-equipotential\" builds this visual with free SVG only."
  },
  {
    "id": "capacitor-plates-27",
    "title": "NEET and JEE Formula Mastery Visual",
    "category": "Diagram",
    "diagramType": "capacitor-plates",
    "shows": "A code-drawn visual for NEET and JEE Formula Mastery showing variables, direction or graph behavior.",
    "labels": [
      "C",
      "Q",
      "V,",
      "U",
      "1"
    ],
    "concept": "Formula mastery means knowing what stays constant: Q, V, C, E or K.",
    "removesConfusion": "Most capacitor traps are constant-Q versus constant-V traps.",
    "manual": "Draw a clean labelled sketch for NEET and JEE Formula Mastery, then write C=Q/V, U=1/2CV^2 below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"capacitor-plates\" builds this visual with free SVG only."
  },
  {
    "id": "dielectric-28",
    "title": "Common Conceptual Traps Visual",
    "category": "Diagram",
    "diagramType": "dielectric",
    "shows": "A code-drawn visual for Common Conceptual Traps showing variables, direction or graph behavior.",
    "labels": [
      "check",
      "sign,",
      "constraint,",
      "units"
    ],
    "concept": "Traps come from scalar/vector confusion, sign of potential energy and capacitor constraints.",
    "removesConfusion": "Potential is scalar while field is vector.",
    "manual": "Draw a clean labelled sketch for Common Conceptual Traps, then write check sign, constraint, units below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"dielectric\" builds this visual with free SVG only."
  },
  {
    "id": "polarization-29",
    "title": "Board Exam Derivation Focus Visual",
    "category": "Diagram",
    "diagramType": "polarization",
    "shows": "A code-drawn visual for Board Exam Derivation Focus showing variables, direction or graph behavior.",
    "labels": [
      "derive",
      "from",
      "W",
      "q,",
      "C"
    ],
    "concept": "Board answers need clean derivations for point potential, capacitor capacitance and capacitor energy.",
    "removesConfusion": "State assumptions before writing final formula.",
    "manual": "Draw a clean labelled sketch for Board Exam Derivation Focus, then write derive from W/q, C=Q/V, dU=Vdq below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"polarization\" builds this visual with free SVG only."
  },
  {
    "id": "series-capacitors-30",
    "title": "Final Revision Section Visual",
    "category": "Diagram",
    "diagramType": "series-capacitors",
    "shows": "A code-drawn visual for Final Revision Section showing variables, direction or graph behavior.",
    "labels": [
      "top",
      "formulas",
      "traps"
    ],
    "concept": "Final revision compresses potential, energy, equipotentials, capacitors and dielectrics into one dashboard.",
    "removesConfusion": "Do not revise formulas without their physical condition.",
    "manual": "Draw a clean labelled sketch for Final Revision Section, then write top formulas + traps below it.",
    "digital": "Use responsive SVG primitives: axes, arrows, plates, cells, wires, curves and labels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"series-capacitors\" builds this visual with free SVG only."
  }
]
