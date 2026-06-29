export const formulas = [
  {
    "id": "potential",
    "title": "Electrostatic Potential",
    "formula": "V = W/q0",
    "display": "V = W/q0",
    "symbols": [
      [
        "V",
        "potential",
        "V"
      ],
      [
        "W",
        "work done",
        "J"
      ],
      [
        "q0",
        "test charge",
        "C"
      ]
    ],
    "meaning": "Potential is work per unit charge.",
    "dimension": "[J/C]=V",
    "graph": "Potential is scalar and can be positive or negative.",
    "trap": "Do not confuse potential with potential energy.",
    "easyExample": "Identify quantities in V = W/q0 and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Potential is work per unit charge.",
    "jeeExample": "JEE Main may combine V = W/q0 with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "potential-difference",
    "title": "Potential Difference",
    "formula": "Delta V = W/q",
    "display": "Delta V = W/q",
    "symbols": [
      [
        "Delta V",
        "potential difference",
        "V"
      ],
      [
        "W",
        "work",
        "J"
      ],
      [
        "q",
        "charge",
        "C"
      ]
    ],
    "meaning": "Potential difference measures energy change per unit charge.",
    "dimension": "[J/C]=V",
    "graph": "Moving along equipotential gives DeltaV=0.",
    "trap": "Sign depends on direction.",
    "easyExample": "Identify quantities in Delta V = W/q and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Potential difference measures energy change per unit charge.",
    "jeeExample": "JEE Main may combine Delta V = W/q with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "point-potential",
    "title": "Point Charge Potential",
    "formula": "V = kQ/r",
    "display": "V = kQ/r",
    "symbols": [
      [
        "Q",
        "source charge",
        "C"
      ],
      [
        "r",
        "distance",
        "m"
      ],
      [
        "k",
        "1/(4 pi epsilon0)",
        "N m^2 C^-2"
      ]
    ],
    "meaning": "Potential falls as 1/r and keeps charge sign.",
    "dimension": "[kQ/r]=V",
    "graph": "V-r graph is a rectangular hyperbola.",
    "trap": "Use algebraic Q, not magnitude only.",
    "easyExample": "Identify quantities in V = kQ/r and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Potential falls as 1/r and keeps charge sign.",
    "jeeExample": "JEE Main may combine V = kQ/r with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "field-potential",
    "title": "Field-Potential Relation",
    "formula": "E = -dV/dr",
    "display": "E = -dV/dr",
    "symbols": [
      [
        "E",
        "electric field",
        "V m^-1"
      ],
      [
        "dV/dr",
        "potential gradient",
        "V m^-1"
      ]
    ],
    "meaning": "Field points toward decreasing potential.",
    "dimension": "[dV/dr]=V/m=N/C",
    "graph": "Slope of V-r graph gives -E.",
    "trap": "The negative sign matters.",
    "easyExample": "Identify quantities in E = -dV/dr and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Field points toward decreasing potential.",
    "jeeExample": "JEE Main may combine E = -dV/dr with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "two-charge-energy",
    "title": "Potential Energy of Two Charges",
    "formula": "U = kq1q2/r",
    "display": "U = kq1q2/r",
    "symbols": [
      [
        "U",
        "potential energy",
        "J"
      ],
      [
        "q1,q2",
        "charges",
        "C"
      ],
      [
        "r",
        "separation",
        "m"
      ]
    ],
    "meaning": "Energy stored in assembling two charges.",
    "dimension": "[kq1q2/r]=J",
    "graph": "U-r graph keeps sign of q1q2.",
    "trap": "Count signs carefully.",
    "easyExample": "Identify quantities in U = kq1q2/r and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Energy stored in assembling two charges.",
    "jeeExample": "JEE Main may combine U = kq1q2/r with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "system-energy",
    "title": "System Potential Energy",
    "formula": "U = sum k qi qj/rij",
    "display": "U = sum k qi qj/rij",
    "symbols": [
      [
        "qi,qj",
        "charge pair",
        "C"
      ],
      [
        "rij",
        "pair separation",
        "m"
      ]
    ],
    "meaning": "Add energy for every distinct pair.",
    "dimension": "Each term is joule.",
    "graph": "Energy is scalar sum over pairs.",
    "trap": "Do not double-count pairs.",
    "easyExample": "Identify quantities in U = sum k qi qj/rij and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Add energy for every distinct pair.",
    "jeeExample": "JEE Main may combine U = sum k qi qj/rij with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "dipole-energy",
    "title": "Dipole Energy",
    "formula": "U = -pE cos theta",
    "display": "U = -pE cos theta",
    "symbols": [
      [
        "p",
        "dipole moment",
        "C m"
      ],
      [
        "E",
        "uniform field",
        "N/C"
      ],
      [
        "theta",
        "angle between p and E",
        "degree/radian"
      ]
    ],
    "meaning": "Dipole energy is minimum when p aligns with E.",
    "dimension": "[pE]=J",
    "graph": "U-theta graph is negative cosine.",
    "trap": "Theta is between p and E.",
    "easyExample": "Identify quantities in U = -pE cos theta and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Dipole energy is minimum when p aligns with E.",
    "jeeExample": "JEE Main may combine U = -pE cos theta with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "capacitance",
    "title": "Capacitance",
    "formula": "C = Q/V",
    "display": "C = Q/V",
    "symbols": [
      [
        "C",
        "capacitance",
        "F"
      ],
      [
        "Q",
        "charge",
        "C"
      ],
      [
        "V",
        "potential difference",
        "V"
      ]
    ],
    "meaning": "Capacitance measures charge stored per volt.",
    "dimension": "[C/V]=F",
    "graph": "Q-V graph slope is C.",
    "trap": "Capacitance is not caused by Q alone.",
    "easyExample": "Identify quantities in C = Q/V and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Capacitance measures charge stored per volt.",
    "jeeExample": "JEE Main may combine C = Q/V with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "sphere-capacitance",
    "title": "Spherical Conductor Capacitance",
    "formula": "C = 4 pi epsilon0 R",
    "display": "C = 4 pi epsilon0 R",
    "symbols": [
      [
        "R",
        "radius",
        "m"
      ],
      [
        "epsilon0",
        "permittivity",
        "C^2 N^-1 m^-2"
      ]
    ],
    "meaning": "Larger isolated sphere has larger capacitance.",
    "dimension": "epsilon0 R has unit F.",
    "graph": "C-R graph is straight line.",
    "trap": "This is for isolated sphere.",
    "easyExample": "Identify quantities in C = 4 pi epsilon0 R and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Larger isolated sphere has larger capacitance.",
    "jeeExample": "JEE Main may combine C = 4 pi epsilon0 R with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "parallel-plate",
    "title": "Parallel Plate Capacitance",
    "formula": "C = epsilon0 A/d",
    "display": "C = epsilon0 A/d",
    "symbols": [
      [
        "A",
        "plate area",
        "m^2"
      ],
      [
        "d",
        "plate separation",
        "m"
      ]
    ],
    "meaning": "Bigger area stores more charge; bigger gap stores less.",
    "dimension": "[epsilon0 A/d]=F",
    "graph": "C versus d is inverse.",
    "trap": "Neglect edge effects.",
    "easyExample": "Identify quantities in C = epsilon0 A/d and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Bigger area stores more charge; bigger gap stores less.",
    "jeeExample": "JEE Main may combine C = epsilon0 A/d with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "dielectric",
    "title": "Dielectric Capacitor",
    "formula": "C = K epsilon0 A/d",
    "display": "C = K epsilon0 A/d",
    "symbols": [
      [
        "K",
        "dielectric constant",
        "unitless"
      ]
    ],
    "meaning": "Dielectric increases capacitance by factor K.",
    "dimension": "K is dimensionless.",
    "graph": "C-K graph is linear.",
    "trap": "K is not capacitance.",
    "easyExample": "Identify quantities in C = K epsilon0 A/d and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Dielectric increases capacitance by factor K.",
    "jeeExample": "JEE Main may combine C = K epsilon0 A/d with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "series-capacitors",
    "title": "Series Capacitors",
    "formula": "1/Ceq = 1/C1 + 1/C2 + ...",
    "display": "1/Ceq = 1/C1 + 1/C2 + ...",
    "symbols": [
      [
        "Ceq",
        "equivalent capacitance",
        "F"
      ]
    ],
    "meaning": "Same charge flows on series capacitors.",
    "dimension": "All terms have F^-1.",
    "graph": "Ceq is less than smallest capacitor.",
    "trap": "Do not add C directly in series.",
    "easyExample": "Identify quantities in 1/Ceq = 1/C1 + 1/C2 + ... and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Same charge flows on series capacitors.",
    "jeeExample": "JEE Main may combine 1/Ceq = 1/C1 + 1/C2 + ... with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "parallel-capacitors",
    "title": "Parallel Capacitors",
    "formula": "Ceq = C1 + C2 + ...",
    "display": "Ceq = C1 + C2 + ...",
    "symbols": [
      [
        "Ceq",
        "equivalent capacitance",
        "F"
      ]
    ],
    "meaning": "Parallel capacitors share same voltage.",
    "dimension": "All terms are F.",
    "graph": "Ceq is larger than largest capacitor.",
    "trap": "Do not use reciprocal for parallel.",
    "easyExample": "Identify quantities in Ceq = C1 + C2 + ... and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Parallel capacitors share same voltage.",
    "jeeExample": "JEE Main may combine Ceq = C1 + C2 + ... with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "capacitor-energy",
    "title": "Capacitor Energy",
    "formula": "U = 1/2 CV^2 = Q^2/(2C) = 1/2 QV",
    "display": "U = 1/2 CV^2 = Q^2/(2C) = 1/2 QV",
    "symbols": [
      [
        "U",
        "stored energy",
        "J"
      ]
    ],
    "meaning": "Energy is stored in electric field.",
    "dimension": "CV^2 gives C V^2 = J.",
    "graph": "Area under V-Q graph is U.",
    "trap": "Pick formula based on constant Q or V.",
    "easyExample": "Identify quantities in U = 1/2 CV^2 = Q^2/(2C) = 1/2 QV and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Energy is stored in electric field.",
    "jeeExample": "JEE Main may combine U = 1/2 CV^2 = Q^2/(2C) = 1/2 QV with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  },
  {
    "id": "energy-density",
    "title": "Electric Field Energy Density",
    "formula": "u = 1/2 epsilon0 E^2",
    "display": "u = 1/2 epsilon0 E^2",
    "symbols": [
      [
        "u",
        "energy density",
        "J m^-3"
      ],
      [
        "E",
        "electric field",
        "N/C"
      ]
    ],
    "meaning": "Energy is distributed through the field volume.",
    "dimension": "epsilon0 E^2 gives J/m^3.",
    "graph": "u grows as square of E.",
    "trap": "Use dielectric permittivity when dielectric fills space.",
    "easyExample": "Identify quantities in u = 1/2 epsilon0 E^2 and substitute after SI conversion.",
    "neetExample": "NEET may ask direct use or statement based on: Energy is distributed through the field volume.",
    "jeeExample": "JEE Main may combine u = 1/2 epsilon0 E^2 with graph slope, ratios or constraints.",
    "twist": "The formula is powerful only when its assumptions are satisfied."
  }
]

export const formulaGroups = [
  {
    "title": "Potential",
    "formulas": [
      "potential",
      "potential-difference",
      "point-potential",
      "field-potential",
      "two-charge-energy"
    ]
  },
  {
    "title": "Energy",
    "formulas": [
      "system-energy",
      "dipole-energy",
      "capacitance",
      "sphere-capacitance",
      "parallel-plate"
    ]
  },
  {
    "title": "Capacitors",
    "formulas": [
      "dielectric",
      "series-capacitors",
      "parallel-capacitors",
      "capacitor-energy",
      "energy-density"
    ]
  },
  {
    "title": "Applications",
    "formulas": []
  }
]

