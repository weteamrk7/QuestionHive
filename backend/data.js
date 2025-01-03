const questions = [
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the atomic number of Helium?",
      "options": ["1", "2", "4", "6"],
      "answer": "2",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 1"
    },
    {
      "difficulty" : "easy",
      "category": "NEET",
      "question": "What is the powerhouse of the cell?",
      "options": ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
      "answer": "Mitochondria",
      
      
      "subject": "Biology",
      "chapter": "Chapter 3"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the SI unit of force?",
      "options": ["Pascal", "Newton", "Joule", "Watt"],
      "answer": "Newton",
      
      
      "subject": "Physics",
      "chapter": "Chapter 2"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the value of the mathematical constant π?",
      "options": ["2.14", "3.14", "1.62", "4.13"],
      "answer": "3.14",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 1"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "Who is known as the father of modern chemistry?",
      "options": ["Isaac Newton", "Albert Einstein", "Antoine Lavoisier", "Dmitri Mendeleev"],
      "answer": "Antoine Lavoisier",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 4"
    },
    {
      "difficulty" : "hard",
      "category": "NEET",
      "question": "Which blood group is known as the universal donor?",
      "options": ["A", "B", "O", "AB"],
      "answer": "O",
      
      
      "subject": "Biology",
      "chapter": "Chapter 5"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the speed of light in a vacuum?",
      "options": ["3 x 10^8 m/s", "2 x 10^8 m/s", "1.5 x 10^8 m/s", "3.5 x 10^8 m/s"],
      "answer": "3 x 10^8 m/s",
      
      
      "subject": "Physics",
      "chapter": "Chapter 1"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the derivative of sin(x)?",
      "options": ["cos(x)", "-cos(x)", "-sin(x)", "sin(x)"],
      "answer": "cos(x)",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 3"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the molecular formula of water?",
      "options": ["H2O", "CO2", "O2", "H2"],
      "answer": "H2O",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 2"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "Which part of the plant is responsible for photosynthesis?",
      "options": ["Stem", "Root", "Leaf", "Flower"],
      "answer": "Leaf",
      
      
      "subject": "Biology",
      "chapter": "Chapter 4"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "Who formulated the laws of motion?",
      "options": ["Galileo", "Newton", "Einstein", "Tesla"],
      "answer": "Newton",
      
      
      "subject": "Physics",
      "chapter": "Chapter 6"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the integral of 1/x?",
      "options": ["ln(x)", "e^x", "x^2/2", "1/x^2"],
      "answer": "ln(x)",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 2"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is Avogadro's number?",
      "options": ["6.02 x 10^23", "3.14", "1.62 x 10^23", "2.17 x 10^23"],
      "answer": "6.02 x 10^23",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 3"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the structural and functional unit of the kidney?",
      "options": ["Neuron", "Nephron", "Alveolus", "Atrium"],
      "answer": "Nephron",
      
      
      "subject": "Biology",
      "chapter": "Chapter 8"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the unit of electrical resistance?",
      "options": ["Volt", "Ohm", "Ampere", "Watt"],
      "answer": "Ohm",
      
      
      "subject": "Physics",
      "chapter": "Chapter 7"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the law of conservation of mass?",
      "options": ["Mass can be created or destroyed", "Mass and energy are interchangeable", "Mass remains constant in a chemical reaction", "Mass is directly proportional to volume"],
      "answer": "Mass remains constant in a chemical reaction",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 5"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the process of photosynthesis?",
      "options": ["Conversion of light energy into chemical energy", "Conversion of chemical energy into light energy", "Breakdown of food molecules to release energy", "Building up of complex molecules from simpler ones"],
      "answer": "Conversion of light energy into chemical energy",
      
      
      "subject": "Biology",
      "chapter": "Chapter 6"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of Archimedes?",
      "options": ["A body immersed in a fluid experiences an upthrust equal to the weight of the fluid displaced", "Pressure is inversely proportional to area", "Pressure in a fluid at rest acts equally in all directions", "Velocity of a fluid is inversely proportional to its cross-sectional area"],
      "answer": "A body immersed in a fluid experiences an upthrust equal to the weight of the fluid displaced",
      
      
      "subject": "Physics",
      "chapter": "Chapter 8"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the limit of (sin x)/x as x approaches 0?",
      "options": ["0", "1", "infinity", "does not exist"],
      "answer": "1",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 4"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of entropy?",
      "options": ["Measure of disorder in a system", "Measure of energy in a system", "Measure of work done by a system", "Measure of heat transferred to a system"],
      "answer": "Measure of disorder in a system",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 6"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the nervous system?",
      "options": ["To transport oxygen to cells", "To break down food for energy", "To coordinate and control body functions", "To protect the body from infection"],
      "answer": "To coordinate and control body functions",
      
      
      "subject": "Biology",
      "chapter": "Chapter 7"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the formula for kinetic energy?",
      "options": ["1/2 mv^2", "mgh", "F x d", "P x V"],
      "answer": "1/2 mv^2",
      
      
      "subject": "Physics",
      "chapter": "Chapter 9"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the derivative of e^x?",
      "options": ["e^x", "x*e^(x-1)", "ln(x)", "1/x"],
      "answer": "e^x",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 5"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of hybridization?",
      "options": ["Mixing of atomic orbitals to form hybrid orbitals", "Mixing of different elements to form a compound", "Mixing of different isotopes of an element", "Mixing of different energy levels of an atom"],
      "answer": "Mixing of atomic orbitals to form hybrid orbitals",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 7"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the role of insulin in the body?",
      "options": ["To regulate blood sugar levels", "To aid in digestion", "To fight infection", "To regulate body temperature"],
      "answer": "To regulate blood sugar levels",
      
      
      "subject": "Biology",
      "chapter": "Chapter 8"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the unit of electric charge?",
      "options": ["Volt", "Ampere", "Coulomb", "Ohm"],
      "answer": "Coulomb",
      
      
      "subject": "Physics",
      "chapter": "Chapter 10"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the integral of x^n?",
      "options": ["x^(n+1)/(n+1)", "nx^(n-1)", "ln(x^n)", "1/(n+1)x^(n+1)"],
      "answer": "x^(n+1)/(n+1)",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 6"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of redox reactions?",
      "options": ["Reactions involving transfer of electrons", "Reactions involving transfer of protons", "Reactions involving transfer of heat", "Reactions involving transfer of mass"],
      "answer": "Reactions involving transfer of electrons",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 8"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the kidneys?",
      "options": ["To produce hormones", "To filter waste products from the blood", "To aid in digestion", "To regulate body temperature"],
      "answer": "To filter waste products from the blood",
      
      
      "subject": "Biology",
      "chapter": "Chapter 9"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of conservation of energy?",
      "options": ["Energy can be created but not destroyed", "Energy can be destroyed but not created", `Energy   
   can neither be created nor destroyed, but can be transformed from one form to another`, `Energy   
   is directly proportional to mass`],
      "answer": "Energy can neither be created nor destroyed, but can be transformed from one form to another",
      
      
      "subject": "Physics",
      "chapter": "Chapter 11"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Taylor series expansion of e^x?",
      "options": ["1 + x + x^2/2! + x^3/3! + ...", "1 - x + x^2/2! - x^3/3! + ...", "x - x^2/2! + x^3/3! - ...", "1 + x^2/2! + x^4/4! + ..."],
      "answer": "1 + x + x^2/2! + x^3/3! + ...",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 7"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of equilibrium constant?",
      "options": ["Ratio of the rate constants of forward and backward reactions", "Ratio of the concentrations of products to reactants at equilibrium", "Ratio of the activation energies of forward and backward reactions", "Ratio of the enthalpy changes of forward and backward reactions"],
      "answer": "Ratio of the concentrations of products to reactants at equilibrium",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 9"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the endocrine system?",
      "options": ["To regulate body temperature", "To transport oxygen to cells", "To produce hormones to regulate body functions", "To filter waste products from the blood"],
      "answer": "To produce hormones to regulate body functions",
      
      
      "subject": "Biology",
      "chapter": "Chapter 10"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the unit of power?",
      "options": ["Joule", "Watt", "Newton", "Pascal"],
      "answer": "Watt",
      
      
      "subject": "Physics",
      "chapter": "Chapter 12"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Laplace transform of f(t) = t^n?",
      "options": ["n!/s^(n+1)", "s^n/n!", "1/(s-n)", "e^(-ns)"],
      "answer": "n!/s^(n+1)",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 8"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of ionic bond?",
      "options": ["Bond formed by sharing of electrons", "Bond formed by transfer of electrons", "Bond formed by electrostatic attraction between ions", "Bond formed by hydrogen bonding"],
      "answer": "Bond formed by transfer of electrons",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 10"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the process of respiration?",
      "options": ["Taking in oxygen and releasing carbon dioxide", "Breaking down food to release energy", "Building up of complex molecules from simpler ones", "Transport of oxygen to cells"],
      "answer": "Taking in oxygen and releasing carbon dioxide",
      
      
      "subject": "Biology",
      "chapter": "Chapter 11"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the formula for potential energy?",
      "options": ["mgh", "1/2 mv^2", "F x d", "P x V"],
      "answer": "mgh",
      
      
      "subject": "Physics",
      "chapter": "Chapter 13"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Fourier transform of a Dirac delta function?",
      "options": ["1", "0", "infinity", "undefined"],
      "answer": "1",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 9"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of pH?",
      "options": ["Measure of acidity of a solution", "Measure of basicity of a solution", "Measure of concentration of a solution", "Measure of temperature of a solution"],
      "answer": "Measure of acidity of a solution",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 11"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the role of the liver in the human body?",
      "options": ["To produce hormones", "To filter waste products from the blood", "To aid in digestion and detoxification", "To regulate body temperature"],
      "answer": "To aid in digestion and detoxification",
      
      
      "subject": "Biology",
      "chapter": "Chapter 12"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the unit of pressure?",
      "options": ["Pascal", "Newton", "Joule", "Watt"],
      "answer": "Pascal",
      
      
      "subject": "Physics",
      "chapter": "Chapter 14"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the divergence of a vector field?",
      "options": ["Measure of the source or sink of a vector field", "Measure of the curl of a vector field", "Measure of the magnitude of a vector field", "Measure of the direction of a vector field"],
      "answer": "Measure of the source or sink of a vector field",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 10"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of chemical equilibrium?",
      "options": ["State of a reaction where the rate of forward reaction is equal to the rate of backward reaction", "State of a reaction where the concentration of reactants is equal to the concentration of products", "State of a reaction where the temperature remains constant", "State of a reaction where the pressure remains constant"],
      "answer": "State of a reaction where the rate of forward reaction is equal to the rate of backward reaction",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 12"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the lungs?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To aid in digestion", "To exchange oxygen and carbon dioxide with the blood"],
      "answer": "To exchange oxygen and carbon dioxide with the blood",
      
      
      "subject": "Biology",
      "chapter": "Chapter 13"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the unit of electric field intensity?",
      "options": ["Volt", "Ampere", "Coulomb", "Newton/Coulomb"],
      "answer": "Newton/Coulomb",
      
      
      "subject": "Physics",
      "chapter": "Chapter 15"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the curl of a vector field?",
      "options": ["Measure of the source or sink of a vector field", "Measure of the rotation of a vector field", "Measure of the magnitude of a vector field", "Measure of the direction of a vector field"],
      "answer": "Measure of the rotation of a vector field",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 11"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of organic chemistry?",
      "options": ["Chemistry of carbon compounds", "Chemistry of inorganic compounds", "Chemistry of metals", "Chemistry of non-metals"],
      "answer": "Chemistry of carbon compounds",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 13"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the heart?",
      "options": ["To pump blood throughout the body", "To filter waste products from the blood", "To aid in digestion", "To regulate body temperature"],
      "answer": "To pump blood throughout the body",
      
      
      "subject": "Biology",
      "chapter": "Chapter 14"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the unit of magnetic field strength?",
      "options": ["Tesla", "Gauss", "Weber", "Ampere-turn/meter"],
      "answer": "Tesla",
      
      
      "subject": "Physics",
      "chapter": "Chapter 16"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Green's theorem?",
      "options": ["Relates a line integral to a surface integral", "Relates a surface integral to a volume integral", "Relates a line integral to a volume integral", "Relates a surface integral to a line integral"],
      "answer": "Relates a line integral to a surface integral",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 12"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of isomerism?",
      "options": ["Compounds with the same molecular formula but different structural formulas", "Compounds with the same molecular formula but different physical properties", "Compounds with the same molecular formula but different chemical properties", "Compounds with different molecular formulas but the same structural formula"],
      "answer": "Compounds with the same molecular formula but different structural formulas",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 14"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the digestive system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To regulate body temperature"],
      "answer": "To break down food into nutrients",
      
      
      "subject": "Biology",
      "chapter": "Chapter 15"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of electromagnetic induction?",
      "options": ["A changing magnetic field induces an electric current", "A changing electric current induces a magnetic field", "A moving charge produces a magnetic field", "A magnetic field exerts a force on a moving charge"],
      "answer": "A changing magnetic field induces an electric current",
      
      
      "subject": "Physics",
      "chapter": "Chapter 17"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Stokes' theorem?",
      "options": ["Relates a line integral to a surface integral", "Relates a surface integral to a volume integral", "Relates a line integral to a volume integral", "Relates a surface integral to a line integral"],
      "answer": "Relates a line integral to a surface integral",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 13"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of functional groups?",
      "options": ["Groups of atoms responsible for the characteristic properties of organic compounds", "Groups of atoms that are not involved in chemical reactions", "Groups of atoms that are only present in inorganic compounds", "Groups of atoms that are only present in biological molecules"],
      "answer": "Groups of atoms responsible for the characteristic properties of organic compounds",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 15"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the endocrine system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To produce hormones to regulate body functions", "To regulate body temperature"],
      "answer": "To produce hormones to regulate body functions",
      
      
      "subject": "Biology",
      "chapter": "Chapter 16"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a transformer?",
      "options": ["Electromagnetic induction", "Faraday's law of electrolysis", "Ohm's law", "Kirchhoff's laws"],
      "answer": "Electromagnetic induction",
      
      
      "subject": "Physics",
      "chapter": "Chapter 18"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the divergence theorem?",
      "options": ["Relates a surface integral to a volume integral", "Relates a line integral to a surface integral", "Relates a line integral to a volume integral", "Relates a surface integral to a line integral"],
      "answer": "Relates a surface integral to a volume integral",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 14"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of chemical kinetics?",
      "options": ["Study of the rates of chemical reactions", "Study of the mechanisms of chemical reactions", "Study of the equilibrium of chemical reactions", "Study of the thermodynamics of chemical reactions"],
      "answer": "Study of the rates of chemical reactions",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 16"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the nervous system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To coordinate and control body functions"],
      "answer": "To coordinate and control body functions",
      
      
      "subject": "Biology",
      "chapter": "Chapter 17"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a generator?",
      "options": ["Electromagnetic induction", "Faraday's law of electrolysis", "Ohm's law", "Kirchhoff's laws"],
      "answer": "Electromagnetic induction",
      
      
      "subject": "Physics",
      "chapter": "Chapter 19"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Fourier series of a periodic function?",
      "options": ["Representation of a periodic function as a sum of sine and cosine functions", "Representation of a periodic function as a sum of exponential functions", "Representation of a periodic function as a sum of polynomial functions", "Representation of a periodic function as a sum of logarithmic functions"],
      "answer": "Representation of a periodic function as a sum of sine and cosine functions",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 15"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of chemical bonding?",
      "options": ["Forces that hold atoms together in molecules and compounds", "Forces that hold ions together in ionic compounds", "Forces that hold molecules together in covalent compounds", "Forces that hold atoms together in metallic compounds"],
      "answer": "Forces that hold atoms together in molecules and compounds",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 17"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the respiratory system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To exchange oxygen and carbon dioxide with the blood"],
      "answer": "To exchange oxygen and carbon dioxide with the blood",
      
      
      "subject": "Biology",
      "chapter": "Chapter 18"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a motor?",
      "options": ["Electromagnetic induction", "Faraday's law of electrolysis", "Force on a current-carrying conductor in a magnetic field", "Ohm's law"],
      "answer": "Force on a current-carrying conductor in a magnetic field",
      
      
      "subject": "Physics",
      "chapter": "Chapter 20"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Laplace transform of a unit step function?",
      "options": ["1/s", "1/s^2", "s", "s^2"],
      "answer": "1/s",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 16"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of periodic table?",
      "options": ["Arrangement of elements based on their atomic number and properties", "Arrangement of elements based on their atomic mass and properties", "Arrangement of elements based on their electron configuration and properties", "Arrangement of elements based on their chemical reactivity and properties"],
      "answer": "Arrangement of elements based on their atomic number and properties",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 18"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the excretory system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To regulate body temperature"],
      "answer": "To filter waste products from the blood",
      
      
      "subject": "Biology",
      "chapter": "Chapter 19"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a galvanometer?",
      "options": ["Electromagnetic induction", "Faraday's law of electrolysis", "Force on a current-carrying conductor in a magnetic field", "Ohm's law"],
      "answer": "Force on a current-carrying conductor in a magnetic field",
      
      
      "subject": "Physics",
      "chapter": "Chapter 21"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Z-transform of a unit impulse function?",
      "options": ["1", "0", "infinity", "undefined"],
      "answer": "1",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 17"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of solutions?",
      "options": ["Homogeneous mixtures of two or more substances", "Heterogeneous mixtures of two or more substances", "Pure substances", "Elements"],
      "answer": "Homogeneous mixtures of two or more substances",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 19"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the reproductive system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To produce offspring"],
      "answer": "To produce offspring",
      
      
      "subject": "Biology",
      "chapter": "Chapter 20"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a voltmeter?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Force on a current-carrying conductor in a magnetic field"],
      "answer": "Ohm's law",
      
      
      "subject": "Physics",
      "chapter": "Chapter 22"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the convolution of two functions?",
      "options": ["Integral of the product of the two functions", "Product of the integrals of the two functions", "Sum of the integrals of the two functions", "Difference of the integrals of the two functions"],
      "answer": "Integral of the product of the two functions",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 18"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of electrochemistry?",
      "options": ["Study of the relationship between electricity and chemical reactions", "Study of the relationship between magnetism and chemical reactions", "Study of the relationship between heat and chemical reactions", "Study of the relationship between light and chemical reactions"],
      "answer": "Study of the relationship between electricity and chemical reactions",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 20"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the immune system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To protect the body from infection"],
      "answer": "To protect the body from infection",
      
      
      "subject": "Biology",
      "chapter": "Chapter 21"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of an ammeter?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Force on a current-carrying conductor in a magnetic field"],
      "answer": "Ohm's law",
      
      
      "subject": "Physics",
      "chapter": "Chapter 23"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Dirac delta function?",
      "options": ["Function that is zero everywhere except at a single point", "Function that is one everywhere", "Function that is zero everywhere", "Function that is infinite everywhere"],
      "answer": "Function that is zero everywhere except at a single point",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 19"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of redox reactions?",
      "options": ["Reactions involving transfer of electrons", "Reactions involving transfer of protons", "Reactions involving transfer of heat", "Reactions involving transfer of mass"],
      "answer": "Reactions involving transfer of electrons",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 21"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the circulatory system?",
      "options": ["To transport oxygen and nutrients to cells", "To filter waste products from the blood", "To break down food into nutrients", "To protect the body from infection"],
      "answer": "To transport oxygen and nutrients to cells",
      
      
      "subject": "Biology",
      "chapter": "Chapter 22"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a potentiometer?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Potential drop across a uniform wire is directly proportional to its length"],
      "answer": "Potential drop across a uniform wire is directly proportional to its length",
      
      
      "subject": "Physics",
      "chapter": "Chapter 24"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Fourier transform of a Gaussian function?",
      "options": ["Another Gaussian function", "A Dirac delta function", "A sinusoidal function", "A constant function"],
      "answer": "Another Gaussian function",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 20"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of chemical equilibrium?",
      "options": ["State of a reaction where the rate of forward reaction is equal to the rate of backward reaction", "State of a reaction where the concentration of reactants is equal to the concentration of products", "State of a reaction where the temperature remains constant", "State of a reaction where the pressure remains constant"],
      "answer": "State of a reaction where the rate of forward reaction is equal to the rate of backward reaction",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 22"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the skeletal system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To provide structural support and protection", "To regulate body temperature"],
      "answer": "To provide structural support and protection",
      
      
      "subject": "Biology",
      "chapter": "Chapter 23"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a meter bridge?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Wheatstone bridge principle"],
      "answer": "Wheatstone bridge principle",
      
      
      "subject": "Physics",
      "chapter": "Chapter 25"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Z-transform of a unit step function?",
      "options": ["1/s", "1/s^2", "s", "s^2"],
      "answer": "1/s",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 21"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of solutions?",
      "options": ["Homogeneous mixtures of two or more substances", "Heterogeneous mixtures of two or more substances", "Pure substances", "Elements"],
      "answer": "Homogeneous mixtures of two or more substances",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 23"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the muscular system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To enable movement"],
      "answer": "To enable movement",
      
      
      "subject": "Biology",
      "chapter": "Chapter 24"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a thermocouple?",
      "options": ["Seebeck effect", "Peltier effect", "Thomson effect", "Joule's heating effect"],
      "answer": "Seebeck effect",
      
      
      "subject": "Physics",
      "chapter": "Chapter 26"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the convolution of two functions?",
      "options": ["Integral of the product of the two functions", "Product of the integrals of the two functions", "Sum of the integrals of the two functions", "Difference of the integrals of the two functions"],
      "answer": "Integral of the product of the two functions",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 22"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of electrochemistry?",
      "options": ["Study of the relationship between electricity and chemical reactions", "Study of the relationship between magnetism and chemical reactions", "Study of the relationship between heat and chemical reactions", "Study of the relationship between light and chemical reactions"],
      "answer": "Study of the relationship between electricity and chemical reactions",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 24"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the immune system?",
      "options": ["To transport oxygen to cells", "To filter waste products from the blood", "To break down food into nutrients", "To protect the body from infection"],
      "answer": "To protect the body from infection",
      
      
      "subject": "Biology",
      "chapter": "Chapter 25"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a transistor?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Transistor action"],
      "answer": "Transistor action",
      
      
      "subject": "Physics",
      "chapter": "Chapter 27"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Dirac delta function?",
      "options": ["Function that is zero everywhere except at a single point", "Function that is one everywhere", "Function that is zero everywhere", "Function that is infinite everywhere"],
      "answer": "Function that is zero everywhere except at a single point",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 23"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of redox reactions?",
      "options": ["Reactions involving transfer of electrons", "Reactions involving transfer of protons", "Reactions involving transfer of heat", "Reactions involving transfer of mass"],
      "answer": "Reactions involving transfer of electrons",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 25"
    },
    {
      "difficulty" : "medium",
      "category": "NEET",
      "question": "What is the function of the circulatory system?",
      "options": ["To transport oxygen and nutrients to cells", "To filter waste products from the blood", "To break down food into nutrients", "To protect the body from infection"],
      "answer": "To transport oxygen and nutrients to cells",
      
      
      "subject": "Biology",
      "chapter": "Chapter 26"
    },
    {
      "difficulty" : "medium",
      "category": "CET",
      "question": "What is the principle of a diode?",
      "options": ["Ohm's law", "Kirchhoff's laws", "Electromagnetic induction", "Semiconductor properties"],
      "answer": "Semiconductor properties",
      
      
      "subject": "Physics",
      "chapter": "Chapter 28"
    },
    {
      "difficulty" : "medium",
      "category": "GATE",
      "question": "What is the Fourier transform of a Gaussian function?",
      "options": ["Another Gaussian function", "A Dirac delta function", "A sinusoidal function", "A constant function"],
      "answer": "Another Gaussian function",
      
      
      "subject": "Mathematics",
      "chapter": "Chapter 24"
    },
    {
      "difficulty" : "medium",
      "category": "JEE",
      "question": "What is the concept of chemical equilibrium?",
      "options": ["State of a reaction where the rate of forward reaction is equal to the rate of backward reaction", "State of a reaction where the concentration of reactants is equal to the concentration of products", "State of a reaction where the temperature remains constant", "State of a reaction where the pressure remains constant"],
      "answer": "State of a reaction where the rate of forward reaction is equal to the rate of backward reaction",
      
      
      "subject": "Chemistry",
      "chapter": "Chapter 26"
    }
  ]
  
export default questions;
  