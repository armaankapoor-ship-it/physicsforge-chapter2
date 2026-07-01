export const models3d = {
  "repo": "physicsforge-chapter2",
  "chapterNumber": 2,
  "chapterName": "Electrostatic Potential and Capacitance",
  "shortName": "Potential and Capacitance",
  "count": 20,
  "models": [
    {
      "id": "model-01",
      "number": 1,
      "title": "Potential Hill Around Charge",
      "kind": "charge-field",
      "formula": "V = kq/r",
      "concept": "Potential forms a 3D hill for positive charge and a well for negative charge.",
      "exam": "Potential is scalar, field is vector.",
      "labels": [
        "high V",
        "low V",
        "radial slope"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-02",
      "number": 2,
      "title": "Equipotential Shells",
      "kind": "charge-field",
      "formula": "V = constant",
      "concept": "Transparent shells show surfaces of equal potential.",
      "exam": "No work is done along an equipotential surface.",
      "labels": [
        "shell V1",
        "shell V2",
        "E normal"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-03",
      "number": 3,
      "title": "Potential Energy Pair",
      "kind": "dipole",
      "formula": "U = kq1q2/r",
      "concept": "Energy changes as two charges move closer or farther.",
      "exam": "Sign of potential energy depends on charge signs.",
      "labels": [
        "charge pair",
        "separation",
        "energy change"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-04",
      "number": 4,
      "title": "Capacitor Plate Geometry",
      "kind": "capacitor",
      "formula": "C = epsilon0 A/d",
      "concept": "Larger area and smaller separation increase capacitance.",
      "exam": "Capacitance does not depend on plate charge for an ideal capacitor.",
      "labels": [
        "area A",
        "gap d",
        "plates"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-05",
      "number": 5,
      "title": "Dielectric Insertion",
      "kind": "capacitor",
      "formula": "C = K epsilon0 A/d",
      "concept": "Dielectric slab reduces field and increases capacitance.",
      "exam": "Battery connected and isolated capacitor cases differ.",
      "labels": [
        "dielectric",
        "plates",
        "reduced E"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-06",
      "number": 6,
      "title": "Capacitor Energy Block",
      "kind": "thermal",
      "formula": "U = (1/2)CV^2",
      "concept": "Stored energy appears in the electric field volume.",
      "exam": "Do not mix U = QV with U = (1/2)QV.",
      "labels": [
        "field energy",
        "volume",
        "plates"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-07",
      "number": 7,
      "title": "Series Capacitor Chain",
      "kind": "circuit",
      "formula": "1/Ceq = sum 1/C",
      "concept": "Series capacitors carry same charge.",
      "exam": "Equivalent capacitance is less than smallest capacitor.",
      "labels": [
        "C1",
        "C2",
        "same Q"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-08",
      "number": 8,
      "title": "Parallel Capacitor Bank",
      "kind": "circuit",
      "formula": "Ceq = C1 + C2",
      "concept": "Parallel capacitors share the same voltage.",
      "exam": "Add capacitances directly only in parallel.",
      "labels": [
        "same V",
        "C1",
        "C2"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-09",
      "number": 9,
      "title": "Van de Graaff Dome",
      "kind": "charge-field",
      "formula": "V = kQ/R",
      "concept": "A large sphere can hold high potential with reduced surface field.",
      "exam": "Sharp points leak charge more easily.",
      "labels": [
        "dome",
        "belt",
        "surface charge"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-10",
      "number": 10,
      "title": "Potential Gradient Slope",
      "kind": "wave",
      "formula": "E = -dV/dx",
      "concept": "Steeper potential surface means stronger electric field.",
      "exam": "The minus sign means field points toward decreasing potential.",
      "labels": [
        "slope",
        "E direction",
        "V surface"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-11",
      "number": 11,
      "title": "Charged Conductor Surface",
      "kind": "capacitor",
      "formula": "V same everywhere",
      "concept": "A conductor is an equipotential in electrostatic equilibrium.",
      "exam": "Inside conductor potential is constant, not necessarily zero.",
      "labels": [
        "surface",
        "inside",
        "same V"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-12",
      "number": 12,
      "title": "Earth Grounding Model",
      "kind": "default",
      "formula": "V_earth = 0 reference",
      "concept": "Ground can supply or absorb charge while staying at reference potential.",
      "exam": "Zero potential is a reference, not zero charge.",
      "labels": [
        "ground",
        "conductor",
        "charge flow"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-13",
      "number": 13,
      "title": "Capacitor Discharge Path",
      "kind": "circuit",
      "formula": "Q = CV",
      "concept": "Stored charge can drive current through an external circuit.",
      "exam": "Steady DC cannot pass through dielectric gap.",
      "labels": [
        "charged plate",
        "wire",
        "spark path"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-14",
      "number": 14,
      "title": "Potential of Dipole",
      "kind": "dipole",
      "formula": "V = kp cos theta/r^2",
      "concept": "Positive and negative lobes show angular dependence.",
      "exam": "Potential is zero on equatorial plane.",
      "labels": [
        "axis",
        "equator",
        "lobes"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-15",
      "number": 15,
      "title": "Work Done Moving Charge",
      "kind": "energy-level",
      "formula": "W = q Delta V",
      "concept": "A charge moving between potential levels gains or loses energy.",
      "exam": "Work by field and work by external agent have opposite signs.",
      "labels": [
        "start V",
        "end V",
        "work"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-16",
      "number": 16,
      "title": "Breakdown Field Gap",
      "kind": "capacitor",
      "formula": "E_breakdown approx 3 x 10^6 V/m",
      "concept": "Too much field ionizes air and creates a spark.",
      "exam": "Dielectric strength limits real capacitors.",
      "labels": [
        "air gap",
        "spark",
        "threshold"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-17",
      "number": 17,
      "title": "Capacitance Network Cube",
      "kind": "circuit",
      "formula": "Ceq by symmetry",
      "concept": "3D networks become easier after identifying equal-potential nodes.",
      "exam": "Symmetry can make some capacitors ineffective.",
      "labels": [
        "equal nodes",
        "network",
        "Ceq"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-18",
      "number": 18,
      "title": "Energy Density Slab",
      "kind": "capacitor",
      "formula": "u = (1/2)epsilon E^2",
      "concept": "Energy density lives in the electric field between plates.",
      "exam": "Energy increases with square of field.",
      "labels": [
        "field volume",
        "density",
        "slab"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-19",
      "number": 19,
      "title": "Isolated Capacitor Change",
      "kind": "capacitor",
      "formula": "Q constant",
      "concept": "When isolated, inserting dielectric changes V and energy while Q stays fixed.",
      "exam": "Battery disconnected means charge is constant.",
      "labels": [
        "isolated plates",
        "dielectric",
        "constant Q"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-20",
      "number": 20,
      "title": "Battery Connected Capacitor",
      "kind": "circuit",
      "formula": "V constant",
      "concept": "With battery connected, dielectric insertion allows extra charge to flow.",
      "exam": "Battery connected means voltage is constant.",
      "labels": [
        "battery",
        "plates",
        "charge flow"
      ],
      "color": "#7c3aed"
    }
  ]
}
