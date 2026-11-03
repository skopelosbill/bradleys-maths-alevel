class HonourItem {
  final String id;
  final String title;
  final String subtitle;
  final String glyph;
  final String category; // 'Pure', 'Mechanics', 'Statistics', 'Elite'
  final int targetCount;
  final String description;
  final String headTeachersEye;
  
  int currentCount;
  bool isUnlocked;

  HonourItem({
    required this.id,
    required this.title,
    required this.subtitle,
    required this.glyph,
    required this.category,
    required this.targetCount,
    required this.description,
    required this.headTeachersEye,
    this.currentCount = 0,
    this.isUnlocked = false,
  });

  double get progressPercentage =>
      targetCount > 0 ? (currentCount / targetCount).clamp(0.0, 1.0) : 0.0;
}

class HonoursRoster {
  static List<HonourItem> getDefaultHonours() {
    return [
      // ==========================================
      // PURE MATHEMATICS (10 HONOURS)
      // ==========================================
      HonourItem(
        id: 'leibniz',
        title: "The Leibniz Shield",
        subtitle: "Differential Calculus",
        glyph: "d/dx",
        category: "Pure",
        targetCount: 15,
        description: "Master 15 distinct questions in Differentiation.",
        headTeachersEye:
            "Gottfried Wilhelm Leibniz gave us the notation we still use today. At A-Level, the Chain, Product, and Quotient rules must become second nature so you can focus on geometric interpretation.",
      ),
      HonourItem(
        id: 'newton_calc',
        title: "The Newton Shield",
        subtitle: "Integral Calculus",
        glyph: "∫",
        category: "Pure",
        targetCount: 15,
        description: "Master 15 distinct questions in Integration.",
        headTeachersEye:
            "Integration is an art form. While differentiation follows strict algorithms, integration demands recognition of patterns, substitutions, and parts.",
      ),
      HonourItem(
        id: 'euler_series',
        title: "The Euler Distinction",
        subtitle: "Sequences, Series & Binomial",
        glyph: "∑",
        category: "Pure",
        targetCount: 10,
        description: "Master 10 distinct questions in Binomial and Series.",
        headTeachersEye:
            "Leonhard Euler was the master of infinite series. In exam conditions, binomial approximation validity (|x| < 1) is the classic trap where students surrender easy marks.",
      ),
      HonourItem(
        id: 'descartes',
        title: "The Descartes Honour",
        subtitle: "Coordinate Geometry & Curves",
        glyph: "(x, y)",
        category: "Pure",
        targetCount: 10,
        description: "Master 10 distinct questions in Coordinate & Parametric Geometry.",
        headTeachersEye:
            "Descartes bridged algebra and geometry. Parametric curves frequently separate Grade A students from Grade B students in the summer papers.",
      ),
      HonourItem(
        id: 'argand_vectors',
        title: "The Argand Shield",
        subtitle: "3D Vectors & Geometry",
        glyph: "i, j, k",
        category: "Pure",
        targetCount: 10,
        description: "Master 10 distinct questions in Vectors.",
        headTeachersEye:
            "Spatial reasoning in three dimensions is essential for university STEM courses. Always draw a 2D projection diagram before attempting dot products or collinearity proofs.",
      ),
      HonourItem(
        id: 'hypatia',
        title: "The Hypatia Distinction",
        subtitle: "Functions & Transformations",
        glyph: "f(x)",
        category: "Pure",
        targetCount: 10,
        description: "Master 10 distinct questions in Functions & Modulus.",
        headTeachersEye:
            "Named after the great philosopher of Alexandria. Domain and range restrictions are where examiners catch unwary candidates when finding inverse functions.",
      ),
      HonourItem(
        id: 'ramanujan',
        title: "The Ramanujan Honour",
        subtitle: "Trigonometric Rigour",
        glyph: "sin θ",
        category: "Pure",
        targetCount: 10,
        description: "Master 10 distinct questions in Trigonometry.",
        headTeachersEye:
            "Srinivasa Ramanujan possessed an uncanny intuition for trigonometric identities. When proving an identity, always work strictly on one side until it matches the other.",
      ),
      HonourItem(
        id: 'archimedes_num',
        title: "The Archimedes Ribbon",
        subtitle: "Numerical Methods",
        glyph: "x(n+1)",
        category: "Pure",
        targetCount: 5,
        description: "Master 5 distinct questions in Numerical Methods.",
        headTeachersEye:
            "Archimedes pioneered iterative approximations. Remember that the Newton-Raphson method fails if the starting value hits a turning point where f'(x) = 0.",
      ),
      HonourItem(
        id: 'de_morgan_proof',
        title: "The De Morgan Shield",
        subtitle: "Mathematical Proof",
        glyph: "Q.E.D.",
        category: "Pure",
        targetCount: 10,
        description: "Master 10 distinct questions in Proof.",
        headTeachersEye:
            "Proof is the soul of mathematics. In proof by contradiction, clearly stating the negation of the proposition at step one is mandatory for full marks.",
      ),
      HonourItem(
        id: 'pure_grandmaster',
        title: "The Pure Grandmaster",
        subtitle: "Pure Syllabus Breadth",
        glyph: "∑ ∫ dx",
        category: "Pure",
        targetCount: 75,
        description: "Master 75 distinct questions across the Pure syllabus.",
        headTeachersEye:
            "You have established comprehensive mastery over the theoretical foundation of British A-Level Mathematics.",
      ),

      // ==========================================
      // APPLIED MECHANICS (6 HONOURS)
      // ==========================================
      HonourItem(
        id: 'galileo',
        title: "Galileo’s Kinematics",
        subtitle: "Constant & Variable Acceleration",
        glyph: "a(t)",
        category: "Mechanics",
        targetCount: 10,
        description: "Master 10 distinct questions in Kinematics.",
        headTeachersEye:
            "Galileo proved that all bodies accelerate equally under gravity. The golden rule: never use SUVAT equations when acceleration is a function of time—use calculus.",
      ),
      HonourItem(
        id: 'newton_principia',
        title: "Newton’s Principia",
        subtitle: "Dynamics & Connected Particles",
        glyph: "F = ma",
        category: "Mechanics",
        targetCount: 10,
        description: "Master 10 distinct questions in Dynamics & Newton's Laws.",
        headTeachersEye:
            "Free body force diagrams are non-negotiable. Always resolve perpendicular and parallel to the plane of motion before writing your equation.",
      ),
      HonourItem(
        id: 'archimedes_lever',
        title: "Archimedes’ Lever",
        subtitle: "Statics & Moments",
        glyph: "ΣM = 0",
        category: "Mechanics",
        targetCount: 10,
        description: "Master 10 distinct questions in Statics & Moments.",
        headTeachersEye:
            "'Give me a lever long enough and I shall move the world.' For rigid bodies in equilibrium, choose a pivot point that eliminates the most unknown forces.",
      ),
      HonourItem(
        id: 'ballistics',
        title: "The Ballistic Distinction",
        subtitle: "Projectiles in 2D",
        glyph: "u cos θ",
        category: "Mechanics",
        targetCount: 10,
        description: "Master 10 distinct questions in Projectile Motion.",
        headTeachersEye:
            "The independence of horizontal and vertical motion is the key to projectiles. Horizontal velocity remains constant throughout the flight.",
      ),
      HonourItem(
        id: 'vector_mechanics',
        title: "The Vector Dynamics Honour",
        subtitle: "Vector Forces & Motion",
        glyph: "r(t)",
        category: "Mechanics",
        targetCount: 5,
        description: "Master 5 distinct questions in Vector Mechanics.",
        headTeachersEye:
            "Vectors are the native language of the physical universe. Differentiating position gives velocity; differentiating velocity gives acceleration.",
      ),
      HonourItem(
        id: 'mechanics_master',
        title: "The Master Mechanician",
        subtitle: "Applied Mechanics Breadth",
        glyph: "W = Fs",
        category: "Mechanics",
        targetCount: 40,
        description: "Master 40 distinct questions across Mechanics.",
        headTeachersEye:
            "You have demonstrated physical intuition and mathematical execution at the standard expected in undergraduate Engineering and Physics.",
      ),

      // ==========================================
      // APPLIED STATISTICS (6 HONOURS)
      // ==========================================
      HonourItem(
        id: 'gauss_normal',
        title: "The Gauss Distinction",
        subtitle: "The Normal Distribution",
        glyph: "σ",
        category: "Statistics",
        targetCount: 10,
        description: "Master 10 distinct questions in the Normal Distribution.",
        headTeachersEye:
            "Carl Friedrich Gauss gave us the bell curve. Always sketch the distribution and shade the tail probability before standardising to Z = (X - μ) / σ.",
      ),
      HonourItem(
        id: 'bernoulli',
        title: "The Bernoulli Shield",
        subtitle: "Binomial Distributions",
        glyph: "B(n, p)",
        category: "Statistics",
        targetCount: 10,
        description: "Master 10 distinct questions in Binomial Distributions.",
        headTeachersEye:
            "For a distribution to be binomial: fixed number of trials, independent outcomes, constant probability, and binary outcomes (success/failure).",
      ),
      HonourItem(
        id: 'fisher_hypothesis',
        title: "The Fisher Ribbon",
        subtitle: "Hypothesis Testing",
        glyph: "H0 / H1",
        category: "Statistics",
        targetCount: 10,
        description: "Master 10 distinct questions in Hypothesis Testing.",
        headTeachersEye:
            "Sir Ronald Fisher established modern significance testing. Remember: you never 'prove' H0; you merely conclude there is 'insufficient evidence to reject H0 at the given significance level.'",
      ),
      HonourItem(
        id: 'bayes_prob',
        title: "The Bayes Honour",
        subtitle: "Probability & Conditional Events",
        glyph: "P(A|B)",
        category: "Statistics",
        targetCount: 10,
        description: "Master 10 distinct questions in Probability.",
        headTeachersEye:
            "Conditional probability underpins artificial intelligence and medical testing. P(A|B) = P(A ∩ B) / P(B). Always confirm whether events are independent.",
      ),
      HonourItem(
        id: 'pearson_regression',
        title: "The Pearson Shield",
        subtitle: "Regression & Correlation",
        glyph: "r",
        category: "Statistics",
        targetCount: 10,
        description: "Master 10 distinct questions in Correlation & Regression.",
        headTeachersEye:
            "Correlation does not imply causation. In exam questions, never extrapolate a regression line beyond the range of the given data set.",
      ),
      HonourItem(
        id: 'stats_master',
        title: "The Master Statistician",
        subtitle: "Applied Statistics Breadth",
        glyph: "μ",
        category: "Statistics",
        targetCount: 40,
        description: "Master 40 distinct questions across Statistics.",
        headTeachersEye:
            "You have developed the quantitative and probabilistic reasoning essential for Data Science, Economics, and Medicine.",
      ),

      // ==========================================
      // ELITE AGILITY & SUPREME EXCELLENCE (2 HONOURS)
      // ==========================================
      HonourItem(
        id: 'home_nations',
        title: "The Home Nations Distinction",
        subtitle: "Cross-Board Agility",
        glyph: "ALL 6",
        category: "Elite",
        targetCount: 4,
        description: "Master at least 5 questions each across 4 different UK Exam Boards.",
        headTeachersEye:
            "True mathematical agility transcends exam board styles. You are equally comfortable with Edexcel, AQA, OCR, MEI, WJEC, or CCEA framing.",
      ),
      HonourItem(
        id: 'cambridge_standard',
        title: "The A-Level Grandmaster",
        subtitle: "Grade A* Precision",
        glyph: "A*",
        category: "Elite",
        targetCount: 100,
        description: "Achieve ≥ 75% 1st-try accuracy with at least 50 total attempts.",
        headTeachersEye:
            "The supreme benchmark of the A-Level mathematician: combining speed, accuracy, and rigorous first-time execution across the entire syllabus.",
      ),
    ];
  }
}