import { useState, useRef, useEffect } from "react";

/* ============ DATA (unchanged) ============ */
const DATA = {
  history: {
    label: "History", classes: {
      6: {
        books: [{
          title: "Our Pasts – I", chapters: [
            "What, Where, How and When", "From Hunting–Gathering to Growing Food", "In the Earliest Cities",
            "What Books and Burials Tell Us", "Kingdoms, Kings and an Early Republic", "New Questions and Ideas",
            "Ashoka, the Emperor Who Gave Up War", "Vital Villages, Thriving Towns", "Traders, Kings and Pilgrims",
            "New Empires and Kingdoms", "Buildings, Paintings and Books"]
        }]
      },
      7: {
        books: [{
          title: "Our Pasts – II", chapters: [
            "Tracing Changes Through a Thousand Years", "New Kings and Kingdoms", "The Delhi Sultans", "The Mughal Empire",
            "Rulers and Buildings", "Towns, Traders and Craftspersons", "Tribes, Nomads and Settled Communities",
            "Devotional Paths to the Divine", "The Making of Regional Cultures", "Eighteenth-Century Political Formations"]
        }]
      },
      8: {
        books: [{
          title: "Our Pasts – III", chapters: [
            "How, When and Where", "From Trade to Territory", "Ruling the Countryside",
            "Tribals, Dikus and the Vision of a Golden Age", "When People Rebel: 1857 and After",
            "Civilising the \"Native\", Educating the Nation", "Women, Caste and Reform",
            "The Making of the National Movement: 1870s–1947", "India After Independence"]
        }]
      },
      9: {
        books: [{
          title: "India and the Contemporary World – I", chapters: [
            "The French Revolution", "Socialism in Europe and the Russian Revolution", "Nazism and the Rise of Hitler",
            "Forest Society and Colonialism", "Pastoralists in the Modern World"]
        }]
      },
      10: {
        books: [{
          title: "India and the Contemporary World – II", chapters: [
            "The Rise of Nationalism in Europe", "Nationalism in India", "The Making of a Global World",
            "The Age of Industrialisation", "Print Culture and the Modern World"]
        }]
      },
      11: {
        books: [{
          title: "Themes in World History", chapters: [
            "From the Beginning of Time", "Writing and City Life", "An Empire Across Three Continents",
            "The Central Islamic Lands", "Nomadic Empires", "The Three Orders", "Changing Cultural Traditions",
            "Confrontation of Cultures", "The Industrial Revolution", "Displacing Indigenous Peoples", "Paths to Modernisation"]
        }]
      },
      12: {
        books: [
          {
            title: "Themes in Indian History – I", chapters: [
              "Bricks, Beads and Bones: The Harappan Civilisation", "Kings, Farmers and Towns: Early States and Economies",
              "Kinship, Caste and Class: Early Societies", "Thinkers, Beliefs and Buildings: Buddhism, Jainism and Cultural Developments"]
          },
          {
            title: "Themes in Indian History – II", chapters: [
              "Through the Eyes of Travellers", "Bhakti–Sufi Traditions", "An Imperial Capital: Vijayanagara",
              "Peasants, Zamindars and the State: Agrarian Society (Mughal)", "Kings and Chronicles: The Mughal Court"]
          },
          {
            title: "Themes in Indian History – III", chapters: [
              "Colonialism and the Countryside", "Rebels and the Raj: 1857", "Colonial Cities: Urbanisation, Planning and Architecture",
              "Mahatma Gandhi and the Nationalist Movement", "Understanding Partition: Politics, Memories, Experiences",
              "Framing the Constitution: The Beginning of a New Era"]
          }
        ]
      }
    }
  },

  geography: {
    label: "Geography", classes: {
      6: {
        books: [{
          title: "The Earth Our Habitat", chapters: [
            "The Earth in the Solar System", "Globe: Latitudes and Longitudes", "Motions of the Earth", "Maps",
            "Major Domains of the Earth", "Major Landforms of the Earth", "Our Country – India",
            "India: Climate, Vegetation and Wildlife"]
        }]
      },
      7: {
        books: [{
          title: "Our Environment", chapters: [
            "Environment", "Inside Our Earth", "Our Changing Earth", "Air", "Water",
            "Natural Vegetation and Wildlife", "Human Environment – Settlement, Transport and Communication",
            "Human Environment Interactions – Tropical and Subtropical Region", "Life in the Deserts"]
        }]
      },
      8: {
        books: [{
          title: "Resources and Development", chapters: [
            "Resources", "Land, Soil, Water, Natural Vegetation and Wildlife Resources", "Mineral and Power Resources",
            "Agriculture", "Industries", "Human Resources"]
        }]
      },
      9: {
        books: [{
          title: "Contemporary India – I", chapters: [
            "India – Size and Location", "Physical Features of India", "Drainage", "Climate",
            "Natural Vegetation and Wildlife", "Population"]
        }]
      },
      10: {
        books: [{
          title: "Contemporary India – II", chapters: [
            "Resources and Development", "Forest and Wildlife Resources", "Water Resources", "Agriculture",
            "Minerals and Energy Resources", "Manufacturing Industries", "Lifelines of National Economy"]
        }]
      },
      11: {
        books: [
          {
            title: "Fundamentals of Physical Geography", chapters: [
              "Geography as a Discipline", "The Origin and Evolution of the Earth", "Interior of the Earth",
              "Distribution of Oceans and Continents", "Minerals and Rocks", "Geomorphic Processes",
              "Landforms and their Evolution", "Composition and Structure of Atmosphere",
              "Solar Radiation, Heat Balance and Temperature", "Atmospheric Circulation and Weather Systems",
              "Water in the Atmosphere", "World Climate and Climate Change", "Water (Oceans)",
              "Movements of Ocean Water", "Life on the Earth", "Biodiversity and Conservation"]
          },
          {
            title: "India: Physical Environment", chapters: [
              "India – Location", "Structure and Physiography", "Drainage System", "Climate",
              "Natural Vegetation", "Natural Hazards and Disasters"]
          }
        ]
      },
      12: {
        books: [
          {
            title: "Fundamentals of Human Geography", chapters: [
              "Human Geography: Nature and Scope", "The World Population: Distribution, Density and Growth",
              "Population Composition", "Human Development", "Primary Activities", "Secondary Activities",
              "Tertiary and Quaternary Activities", "Transport and Communication", "International Trade",
              "Human Settlements"]
          },
          {
            title: "India: People and Economy", chapters: [
              "Population: Distribution, Density and Growth", "Migration: Types, Causes and Consequences",
              "Human Development", "Human Settlements", "Land Resources and Agriculture", "Water Resources",
              "Mineral and Energy Resources", "Manufacturing Industries", "Planning and Sustainable Development",
              "Transport and Communication", "International Trade", "Geographical Perspective on Selected Issues and Problems"]
          }
        ]
      }
    }
  },

  polity: {
    label: "Polity", classes: {
      6: {
        books: [{
          title: "Social and Political Life – I", chapters: [
            "Understanding Diversity", "Diversity and Discrimination", "What is Government?",
            "Key Elements of a Democratic Government", "Panchayati Raj", "Rural Administration",
            "Urban Administration", "Rural Livelihoods", "Urban Livelihoods"]
        }]
      },
      7: {
        books: [{
          title: "Social and Political Life – II", chapters: [
            "On Equality", "Role of the Government in Health", "How the State Government Works",
            "Growing up as Boys and Girls", "Women Change the World", "Understanding Media",
            "Understanding Advertising", "Markets Around Us", "A Shirt in the Market", "Struggles for Equality"]
        }]
      },
      8: {
        books: [{
          title: "Social and Political Life – III", chapters: [
            "The Indian Constitution", "Understanding Secularism", "Why Do We Need a Parliament?",
            "Understanding Laws", "Judiciary", "Understanding Our Criminal Justice System",
            "Understanding Marginalisation", "Confronting Marginalisation", "Public Facilities", "Law and Social Justice"]
        }]
      },
      9: {
        books: [{
          title: "Democratic Politics – I", chapters: [
            "What is Democracy? Why Democracy?", "Constitutional Design", "Electoral Politics",
            "Working of Institutions", "Democratic Rights"]
        }]
      },
      10: {
        books: [{
          title: "Democratic Politics – II", chapters: [
            "Power Sharing", "Federalism", "Democracy and Diversity", "Gender, Religion and Caste",
            "Popular Struggles and Movements", "Political Parties", "Outcomes of Democracy", "Challenges to Democracy"]
        }]
      },
      11: {
        books: [
          {
            title: "Indian Constitution at Work", chapters: [
              "Constitution: Why and How?", "Rights in the Indian Constitution", "Election and Representation",
              "Executive", "Legislature", "Judiciary", "Federalism", "Local Governments",
              "Constitution as a Living Document", "The Philosophy of the Constitution"]
          },
          {
            title: "Political Theory", chapters: [
              "Political Theory: An Introduction", "Freedom", "Equality", "Social Justice", "Rights",
              "Citizenship", "Nationalism", "Secularism", "Peace", "Development"]
          }
        ]
      },
      12: {
        books: [
          {
            title: "Contemporary World Politics", chapters: [
              "The Cold War Era", "The End of Bipolarity", "US Hegemony in World Politics",
              "Alternative Centres of Power", "Contemporary South Asia", "International Organisations",
              "Security in the Contemporary World", "Environment and Natural Resources", "Globalisation"]
          },
          {
            title: "Politics in India Since Independence", chapters: [
              "Challenges of Nation Building", "Era of One-Party Dominance", "Politics of Planned Development",
              "India's External Relations", "Challenges to and Restoration of the Congress System",
              "The Crisis of Democratic Order", "Regional Aspirations", "Recent Developments in Indian Politics"]
          }
        ]
      }
    }
  },

  economics: {
    label: "Economics", classes: {
      9: {
        books: [{
          title: "Economics", chapters: [
            "The Story of Village Palampur", "People as Resource", "Poverty as a Challenge", "Food Security in India"]
        }]
      },
      10: {
        books: [{
          title: "Understanding Economic Development", chapters: [
            "Development", "Sectors of the Indian Economy", "Money and Credit",
            "Globalisation and the Indian Economy", "Consumer Rights"]
        }]
      },
      11: {
        books: [
          {
            title: "Indian Economic Development", chapters: [
              "Indian Economy on the Eve of Independence", "Indian Economy: 1950–1990",
              "Liberalisation, Privatisation and Globalisation: An Appraisal", "Poverty",
              "Human Capital Formation in India", "Rural Development", "Employment: Growth, Informalisation and Related Issues",
              "Infrastructure", "Environment and Sustainable Development",
              "Comparative Development Experience of India and its Neighbours"]
          },
          {
            title: "Statistics for Economics", chapters: [
              "Introduction", "Collection of Data", "Organisation of Data", "Presentation of Data",
              "Measures of Central Tendency", "Measures of Dispersion", "Correlation", "Index Numbers"]
          }
        ]
      },
      12: {
        books: [
          {
            title: "Introductory Microeconomics", chapters: [
              "Introduction to Microeconomics", "Theory of Consumer Behaviour", "Production and Costs",
              "The Theory of the Firm Under Perfect Competition", "Market Equilibrium", "Non-Competitive Markets"]
          },
          {
            title: "Introductory Macroeconomics", chapters: [
              "Introduction to Macroeconomics", "National Income Accounting", "Money and Banking",
              "Determination of Income and Employment", "Government Budget and the Economy", "Balance of Payments"]
          }
        ]
      }
    }
  },

  sociology: {
    label: "Sociology", classes: {
      11: {
        books: [
          {
            title: "Introducing Sociology", chapters: [
              "Sociology, Society and its Relationship with other Social Sciences",
              "Terms, Concepts and Their Use in Sociology",
              "Understanding Social Institutions",
              "Culture and Socialisation",
              "Doing Sociology: Research Methods"
            ]
          },
          {
            title: "Understanding Society", chapters: [
              "Social Structure, Stratification and Social Processes in Society",
              "Social Change and Social Order in Rural and Urban Society",
              "Environment and Society",
              "Introducing Western Sociologists",
              "Indian Sociologists"
            ]
          }
        ]
      },
      12: {
        books: [
          {
            title: "Indian Society", chapters: [
              "Introducing Indian Society",
              "The Demographic Structure of Indian Society",
              "Social Institutions: Continuity and Change",
              "The Market as a Social Institution",
              "Patterns of Social Inequality and Exclusion",
              "The Challenges of Cultural Diversity"
            ]
          },
          {
            title: "Social Change and Development in India", chapters: [
              "Structural Change",
              "Cultural Change",
              "The Story of Indian Democracy",
              "Change and Development in Rural Society",
              "Change and Development in Industrial Society",
              "Globalization and Social Change",
              "Mass Media and Communications",
              "Social Movements"
            ]
          }
        ]
      }
    }
  },

  art_culture: {
    label: "Art & Culture", classes: {
      11: {
        books: [
          {
            title: "An Introduction to Indian Art (Fine Arts) & Key Topics", chapters: [
              "An Introduction to Indian Art (Fine Arts)",
              "Temple Architecture",
              "Sculpture",
              "Paintings",
              "Music",
              "Dance",
              "Theatre"
            ]
          }
        ]
      }
    }
  },

  science: {
    label: "Science", classes: {
      6: {
        books: [{
          title: "Science", chapters: [
            "Food: Where Does It Come From?", "Components of Food", "Fibre to Fabric", "Sorting Materials into Groups",
            "Separation of Substances", "Changes Around Us", "Getting to Know Plants", "Body Movements",
            "The Living Organisms and Their Surroundings", "Motion and Measurement of Distances",
            "Light, Shadows and Reflections", "Electricity and Circuits", "Fun with Magnets",
            "Water", "Air Around Us", "Garbage In, Garbage Out"]
        }]
      },
      7: {
        books: [{
          title: "Science", chapters: [
            "Nutrition in Plants", "Nutrition in Animals", "Fibre to Fabric", "Heat", "Acids, Bases and Salts",
            "Physical and Chemical Changes", "Weather, Climate and Adaptations of Animals to Climate",
            "Winds, Storms and Cyclones", "Soil", "Respiration in Organisms", "Transportation in Animals and Plants",
            "Reproduction in Plants", "Motion and Time", "Electric Current and Its Effects", "Light",
            "Water: A Precious Resource", "Forests: Our Lifeline", "Wastewater Story"]
        }]
      },
      8: {
        books: [{
          title: "Science", chapters: [
            "Crop Production and Management", "Microorganisms: Friend and Foe", "Synthetic Fibres and Plastics",
            "Materials: Metals and Non-Metals", "Coal and Petroleum", "Combustion and Flame",
            "Conservation of Plants and Animals", "Cell: Structure and Functions", "Reproduction in Animals",
            "Reaching the Age of Adolescence", "Force and Pressure", "Friction", "Sound",
            "Chemical Effects of Electric Current", "Some Natural Phenomena", "Light", "Stars and the Solar System",
            "Pollution of Air and Water"]
        }]
      },
      9: {
        books: [{
          title: "Science", chapters: [
            "Matter in Our Surroundings", "Is Matter Around Us Pure?", "Atoms and Molecules", "Structure of the Atom",
            "The Fundamental Unit of Life", "Tissues", "Motion", "Force and Laws of Motion", "Gravitation",
            "Work and Energy", "Sound", "Why Do We Fall Ill?", "Natural Resources", "Improvement in Food Resources"]
        }]
      },
      10: {
        books: [{
          title: "Science", chapters: [
            "Chemical Reactions and Equations", "Acids, Bases and Salts", "Metals and Non-metals",
            "Carbon and Its Compounds", "Life Processes", "Control and Coordination",
            "How Do Organisms Reproduce?", "Heredity and Evolution", "Light: Reflection and Refraction",
            "The Human Eye and the Colourful World", "Electricity", "Magnetic Effects of Electric Current",
            "Sources of Energy", "Our Environment", "Management of Natural Resources"]
        }]
      },
      12: {
        books: [{
          title: "Biology (Environment Section)", chapters: [
            "Biodiversity",
            "Ecosystem",
            "Environmental Issues",
            "Conservation"
          ]
        }]
      }
    }
  }
};

const romans = { 6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X", 11: "XI", 12: "XII" };
const API_BASE = import.meta.env.VITE_API_BASE || "/api";
const PROGRESS_URL = `${API_BASE}/progress/1`;

function key(sub, cls, book, idx) { return sub + "|" + cls + "|" + book + "|" + idx; }

/* ============ CSS (unchanged design, embedded) ============ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;600;700&family=Spectral+SC:wght@600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

.ncert-root{
  --paper:#F3ECDC; --paper-dark:#E7DCC0; --card:#FBF7EC; --ink:#241F1C; --ink-soft:#5b5248;
  --navy:#1C2B44; --maroon:#8B2635; --gold:#AD8A45; --sage:#4B6E51; --line:#C9BBA0; --shadow: rgba(36,31,28,0.16);
  background:
    repeating-linear-gradient(0deg, rgba(36,31,28,0.02) 0px, rgba(36,31,28,0.02) 1px, transparent 1px, transparent 3px),
    var(--paper);
  color:var(--ink); font-family:'IBM Plex Sans', sans-serif; min-height:100vh; padding:28px 18px 60px;
}
.ncert-root *{ box-sizing:border-box; }
.ncert-root ::selection{ background:var(--gold); color:var(--paper); }
.ncert-root .wrap{ max-width:1080px; margin:0 auto; }

.ncert-root .register-head{
  border:1.5px solid var(--ink); background:var(--card); box-shadow: 6px 6px 0 var(--shadow);
  padding:28px 30px 22px; position:relative; margin-bottom:26px;
}
.ncert-root .register-head::before{ content:""; position:absolute; inset:6px; border:1px solid var(--line); pointer-events:none; }
.ncert-root .eyebrow{
  font-family:'IBM Plex Mono', monospace; font-size:11px; letter-spacing:.22em; text-transform:uppercase;
  color:var(--maroon); display:flex; align-items:center; gap:10px;
}
.ncert-root .eyebrow::after{ content:""; flex:1; height:1px; background:var(--line); }
.ncert-root h1{ font-family:'Spectral', serif; font-weight:700; font-size:clamp(28px, 4.2vw, 42px); margin:8px 0 4px; letter-spacing:.01em; }
.ncert-root .sub{ color:var(--ink-soft); font-size:14.5px; max-width:56ch; line-height:1.5; }

.ncert-root .head-grid{ display:flex; justify-content:space-between; align-items:flex-end; gap:24px; flex-wrap:wrap; margin-top:18px; }
.ncert-root .stats-row{ display:flex; gap:22px; flex-wrap:wrap; }
.ncert-root .stat{ font-family:'IBM Plex Mono', monospace; }
.ncert-root .stat .n{ font-size:22px; font-weight:600; color:var(--navy); display:block; }
.ncert-root .stat .l{ font-size:10.5px; letter-spacing:.14em; text-transform:uppercase; color:var(--ink-soft); }

.ncert-root .seal-block{ display:flex; align-items:center; gap:14px; }
.ncert-root .seal{ position:relative; width:88px; height:88px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.ncert-root .seal .ring{
  position:absolute; inset:0; border-radius:50%;
  background: conic-gradient(var(--maroon) calc(var(--pct,0)*1%), var(--line) 0);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 9px), #000 calc(100% - 9px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 9px), #000 calc(100% - 9px));
}
.ncert-root .seal .inner{
  position:absolute; inset:9px; border-radius:50%; background:var(--paper); border:1px solid var(--ink);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
}
.ncert-root .seal .inner b{ font-family:'IBM Plex Mono', monospace; font-size:17px; }
.ncert-root .seal .inner span{ font-family:'IBM Plex Mono', monospace; font-size:8px; letter-spacing:.1em; color:var(--ink-soft); }
.ncert-root .seal.done .ring{ background: var(--sage); }
.ncert-root .seal-caption{ font-family:'Spectral SC', serif; font-size:12px; letter-spacing:.08em; color:var(--ink-soft); max-width:120px; line-height:1.3; }

.ncert-root .tabs{ display:flex; gap:4px; margin-bottom:0; flex-wrap:wrap; border-bottom:1.5px solid var(--ink); }
.ncert-root .tab{
  font-family:'Spectral', serif; font-weight:600; font-size:14.5px; padding:10px 18px 9px; cursor:pointer;
  background:var(--paper-dark); border:1.5px solid var(--ink); border-bottom:none; border-radius:6px 6px 0 0;
  position:relative; top:1.5px; color:var(--ink-soft); transition:background .15s, color .15s;
  display:flex; align-items:center; gap:8px;
}
.ncert-root .tab .mini{
  font-family:'IBM Plex Mono', monospace; font-size:10px; color:var(--ink-soft); background:var(--card);
  border:1px solid var(--line); border-radius:20px; padding:1px 7px;
}
.ncert-root .tab.active{ background:var(--card); color:var(--ink); }
.ncert-root .tab.active .mini{ background:var(--gold); color:var(--card); border-color:var(--gold); }
.ncert-root .tab:hover{ color:var(--ink); }

.ncert-root .panel{ background:var(--card); border:1.5px solid var(--ink); border-top:none; padding:22px 24px 8px; margin-bottom:30px; }
.ncert-root .panel-top{
  display:flex; justify-content:space-between; align-items:center; gap:14px; flex-wrap:wrap;
  margin-bottom:16px; padding-bottom:14px; border-bottom:1px dashed var(--line);
}
.ncert-root .panel-title{ font-family:'Spectral', serif; font-size:19px; font-weight:600; }
.ncert-root .panel-title small{ display:block; font-family:'IBM Plex Sans'; font-weight:400; font-size:12.5px; color:var(--ink-soft); margin-top:2px;}

.ncert-root .search-box{ position:relative; }
.ncert-root .search-box input{
  font-family:'IBM Plex Sans'; font-size:13px; padding:8px 12px 8px 30px; border:1px solid var(--ink);
  border-radius:20px; background:var(--paper); width:200px; color:var(--ink);
}
.ncert-root .search-box::before{
  content:"⌕"; position:absolute; left:11px; top:50%; transform:translateY(-50%); color:var(--ink-soft); font-size:14px;
}

.ncert-root .class-grid{ display:grid; grid-template-columns:repeat(auto-fill, minmax(300px,1fr)); gap:16px; padding-bottom:22px; }
.ncert-root .class-card{ border:1px solid var(--ink); background:var(--paper); box-shadow:3px 3px 0 var(--shadow); display:flex; flex-direction:column; }
.ncert-root .class-card-head{
  display:flex; align-items:center; justify-content:space-between; padding:10px 14px; border-bottom:1px solid var(--ink);
  background:var(--navy); color:var(--paper);
}
.ncert-root .class-card-head .roman{ font-family:'Spectral SC', serif; font-size:15px; letter-spacing:.05em; }
.ncert-root .class-card-head .frac{ font-family:'IBM Plex Mono',monospace; font-size:11.5px; opacity:.85; }
.ncert-root .book{ padding:10px 14px 4px; }
.ncert-root .book-title{ font-family:'Spectral', serif; font-style:italic; font-size:13px; color:var(--maroon); margin-bottom:4px; }
.ncert-root ul.chap-list{ list-style:none; margin:0; padding:0 14px 8px; }
.ncert-root ul.chap-list li{ font-size:13px; line-height:1.4; }
.ncert-root ul.chap-list li.hidden{ display:none; }
.ncert-root .chk{
  appearance:none; -webkit-appearance:none; width:15px; height:15px; min-width:15px; margin-top:2px;
  border:1.4px solid var(--ink); border-radius:2px; background:var(--card); cursor:pointer; position:relative;
}
.ncert-root .chk:checked{ background:var(--sage); border-color:var(--sage); }
.ncert-root .chk:checked::after{
  content:"✓"; position:absolute; inset:0; color:#fff; font-size:11px; display:flex; align-items:center; justify-content:center; line-height:1;
}
.ncert-root .chap-text{ cursor:pointer; user-select:none; }
.ncert-root .chap-text.done{ color:var(--ink-soft); text-decoration:line-through; text-decoration-color:var(--sage); }
.ncert-root .chap-num{ font-family:'IBM Plex Mono', monospace; color:var(--ink-soft); font-size:11px; margin-right:3px; }

.ncert-root .card-progress{ height:5px; background:var(--line); margin-top:auto; }
.ncert-root .card-progress i{ display:block; height:100%; background:var(--sage); }

.ncert-root .chap-row{ display:flex; align-items:flex-start; gap:9px; padding:5px 0; border-bottom:1px dotted var(--line); }
.ncert-root ul.chap-list li.hidden .chap-row{ display:none; }
.ncert-root .chap-controls{ display:flex; align-items:center; gap:5px; margin-left:auto; flex-shrink:0; }
.ncert-root .pri-btn{
  font-family:'IBM Plex Mono', monospace; font-size:9.5px; font-weight:600; width:18px; height:18px; border-radius:50%;
  border:1.3px solid var(--line); background:var(--card); color:var(--ink-soft); cursor:pointer;
  display:flex; align-items:center; justify-content:center; line-height:1;
}
.ncert-root .pri-btn[data-pri="H"]{ background:var(--maroon); border-color:var(--maroon); color:#fff; }
.ncert-root .pri-btn[data-pri="M"]{ background:var(--gold); border-color:var(--gold); color:#fff; }
.ncert-root .pri-btn[data-pri="L"]{ background:var(--sage); border-color:var(--sage); color:#fff; }
.ncert-root .rev-badge{
  font-family:'IBM Plex Mono', monospace; font-size:9.5px; min-width:18px; height:18px; padding:0 3px; border-radius:9px;
  border:1.3px solid var(--line); background:var(--card); color:var(--ink-soft); cursor:pointer;
  display:flex; align-items:center; justify-content:center; line-height:1;
}
.ncert-root .rev-badge[data-rev="1"]{ background:#DCE7DD; border-color:var(--sage); color:var(--sage); }
.ncert-root .rev-badge[data-rev="2"]{ background:#BFDAC3; border-color:var(--sage); color:var(--ink); }
.ncert-root .rev-badge[data-rev="3"]{ background:var(--sage); border-color:var(--sage); color:#fff; }
.ncert-root .note-btn{
  font-size:11px; width:18px; height:18px; border-radius:3px; border:1.3px solid var(--line); background:var(--card);
  color:var(--ink-soft); cursor:pointer; line-height:1; display:flex; align-items:center; justify-content:center;
}
.ncert-root .note-btn.has-note{ background:var(--gold); border-color:var(--gold); color:#fff; }
.ncert-root .chap-note{ display:none; margin:2px 0 6px 24px; }
.ncert-root .chap-note.open{ display:block; }
.ncert-root .chap-note textarea{
  width:100%; min-height:44px; font-family:'IBM Plex Sans'; font-size:12px; border:1px solid var(--line);
  border-radius:3px; padding:5px 7px; background:var(--paper); color:var(--ink); resize:vertical;
}
.ncert-root .legend{
  font-family:'IBM Plex Mono', monospace; font-size:10.5px; color:var(--ink-soft); display:flex; gap:14px;
  flex-wrap:wrap; align-items:center; margin:-4px 0 14px;
}
.ncert-root .legend span{ display:inline-flex; align-items:center; gap:4px; }
.ncert-root .legend i{ width:10px; height:10px; border-radius:50%; display:inline-block; }

.ncert-root .subject-notes{ margin:0 0 16px; padding:10px 12px; border:1px dashed var(--line); background:var(--paper); }
.ncert-root .subject-notes label{
  font-family:'IBM Plex Mono', monospace; font-size:10px; letter-spacing:.1em; text-transform:uppercase;
  color:var(--ink-soft); display:block; margin-bottom:5px;
}
.ncert-root .subject-notes textarea{
  width:100%; min-height:52px; font-family:'IBM Plex Sans'; font-size:13px; border:1px solid var(--line);
  border-radius:3px; padding:7px 9px; background:var(--card); color:var(--ink); resize:vertical;
}

.ncert-root .save-indicator{ font-family:'IBM Plex Mono', monospace; font-size:10.5px; color:var(--sage); opacity:0; transition:opacity .3s; margin-left:8px; }
.ncert-root .save-indicator.show{ opacity:1; }

.ncert-root .toolbar{ display:flex; gap:10px; flex-wrap:wrap; margin:0 0 22px; }
.ncert-root button.btn{
  font-family:'IBM Plex Mono', monospace; font-size:11.5px; letter-spacing:.05em; text-transform:uppercase;
  padding:9px 16px; border:1.5px solid var(--ink); border-radius:3px; background:var(--card); color:var(--ink);
  cursor:pointer; transition:transform .1s;
}
.ncert-root button.btn:hover{ transform:translate(-1px,-1px); box-shadow:2px 2px 0 var(--shadow); }
.ncert-root button.btn.primary{ background:var(--navy); color:var(--paper); border-color:var(--navy); }
.ncert-root button.btn.danger{ background:var(--maroon); color:var(--paper); border-color:var(--maroon); }

.ncert-root .modal-bg{ display:none; position:fixed; inset:0; background:rgba(36,31,28,.45); align-items:center; justify-content:center; z-index:50; padding:20px; }
.ncert-root .modal-bg.open{ display:flex; }
.ncert-root .modal{ background:var(--card); border:1.5px solid var(--ink); box-shadow:6px 6px 0 var(--shadow); max-width:520px; width:100%; padding:22px 24px; }
.ncert-root .modal h3{ font-family:'Spectral',serif; margin:0 0 6px; }
.ncert-root .modal p{ font-size:13px; color:var(--ink-soft); margin:0 0 12px; line-height:1.5;}
.ncert-root .modal textarea{
  width:100%; height:110px; font-family:'IBM Plex Mono',monospace; font-size:11.5px; border:1px solid var(--ink);
  padding:8px; background:var(--paper); resize:vertical;
}
.ncert-root .modal .row{ display:flex; gap:8px; margin-top:12px; justify-content:flex-end; flex-wrap:wrap; }

.ncert-root footer{ text-align:center; font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--ink-soft); letter-spacing:.05em; margin-top:10px; }

@media (max-width:640px){
  .ncert-root{ padding:16px 10px 50px; }
  .ncert-root .register-head{ padding:20px 16px 18px; }
  .ncert-root .head-grid{ flex-direction:column; align-items:flex-start; }
  .ncert-root .panel{ padding:18px 14px 6px; }
  .ncert-root .search-box input{ width:150px; }
}
`;

let fetchPromise = null;

export default function App() {
  const [checked, setChecked] = useState({});
  const [revisions, setRevisions] = useState({});
  const [priority, setPriority] = useState({});
  const [chapterNotes, setChapterNotes] = useState({});
  const [subjectNotes, setSubjectNotes] = useState({});
  const [activeSubject, setActiveSubject] = useState("history");
  const [search, setSearch] = useState("");
  const [openNotes, setOpenNotes] = useState({}); // ui-only: which chapter note boxes are open
  const [saveShown, setSaveShown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("export"); // 'export' | 'import'
  const [modalArea, setModalArea] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [dbError, setDbError] = useState(false);
  const saveTimer = useRef(null);
  const modalTextareaRef = useRef(null);
  const initialPersistRef = useRef(true);
  const lastSavedDataRef = useRef("");

  // "save" ping, mirrors the original save indicator that fired on every mutation
  function pingSave() {
    setSaveShown(true);
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setSaveShown(false), 900);
  }

  /* ============ DERIVED COUNTS ============ */
  function totalCounts(subFilter, clsFilter, checkedMap = checked) {
    let total = 0, done = 0;
    for (const sub in DATA) {
      if (subFilter && sub !== subFilter) continue;
      for (const cls in DATA[sub].classes) {
        if (clsFilter && Number(cls) !== Number(clsFilter)) continue;
        DATA[sub].classes[cls].books.forEach((book, bi) => {
          book.chapters.forEach((c, ci) => {
            total++;
            if (checkedMap[key(sub, cls, bi, ci)]) done++;
          });
        });
      }
    }
    return { total, done };
  }

  const overall = totalCounts();
  const overallPct = overall.total ? Math.round((overall.done / overall.total) * 100) : 0;

  useEffect(() => {
    const loadProgress = async () => {
      try {
        if (!fetchPromise) {
          fetchPromise = fetch(PROGRESS_URL).then(res => {
            if (!res.ok) throw new Error("No saved progress");
            return res.json();
          });
        }
        const data = await fetchPromise;
        const loadedChecked = data.checked || {};
        const loadedRevisions = data.revisions || {};
        const loadedPriority = data.priority || {};
        const loadedChapterNotes = data.chapterNotes || {};
        const loadedSubjectNotes = data.subjectNotes || {};

        lastSavedDataRef.current = JSON.stringify({
          checked: loadedChecked,
          revisions: loadedRevisions,
          priority: loadedPriority,
          chapterNotes: loadedChapterNotes,
          subjectNotes: loadedSubjectNotes,
        });

        setChecked(loadedChecked);
        setRevisions(loadedRevisions);
        setPriority(loadedPriority);
        setChapterNotes(loadedChapterNotes);
        setSubjectNotes(loadedSubjectNotes);
      } catch (error) {
        console.warn("Unable to load saved progress:", error);
        setDbError(true);
        fetchPromise = null;
      } finally {
        initialPersistRef.current = false;
      }
    };

    loadProgress();
  }, []);

  useEffect(() => {
    if (initialPersistRef.current) return;

    const currentData = {
      checked,
      revisions,
      priority,
      chapterNotes,
      subjectNotes,
    };
    const currentDataStr = JSON.stringify(currentData);
    if (lastSavedDataRef.current === currentDataStr) return;

    lastSavedDataRef.current = currentDataStr;

    const saveProgress = async () => {
      try {
        await fetch(PROGRESS_URL, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: 1,
            ...currentData
          }),
        });
      } catch (error) {
        console.warn("Unable to persist progress:", error);
        setDbError(true);
      }
    };

    saveProgress();
  }, [checked, revisions, priority, chapterNotes, subjectNotes]);

  function toggleChapter(k) {
    setChecked(prev => {
      const next = { ...prev, [k]: !prev[k] };
      if (!next[k]) delete next[k];
      return next;
    });
    pingSave();
  }

  function cyclePriority(k) {
    const priCycle = ["", "H", "M", "L"];
    setPriority(prev => {
      const current = prev[k] || "";
      const nextVal = priCycle[(priCycle.indexOf(current) + 1) % priCycle.length];
      const next = { ...prev };
      if (nextVal) next[k] = nextVal; else delete next[k];
      return next;
    });
    pingSave();
  }

  function cycleRevision(k) {
    setRevisions(prev => {
      const nextVal = ((prev[k] || 0) + 1) % 4;
      const next = { ...prev };
      if (nextVal) next[k] = nextVal; else delete next[k];
      return next;
    });
    pingSave();
  }

  function updateChapterNote(k, value) {
    setChapterNotes(prev => {
      const next = { ...prev };
      if (value.trim()) next[k] = value; else delete next[k];
      return next;
    });
    pingSave();
  }

  function updateSubjectNote(sub, value) {
    setSubjectNotes(prev => ({ ...prev, [sub]: value }));
    pingSave();
  }

  function toggleNoteOpen(k) {
    setOpenNotes(prev => ({ ...prev, [k]: !prev[k] }));
  }

  function handleReset() {
    if (window.confirm("Clear every checked chapter, revision, priority tag and note across all subjects? This cannot be undone.")) {
      setChecked({});
      setRevisions({});
      setPriority({});
      setChapterNotes({});
      setSubjectNotes({});
      pingSave();
    }
  }

  function openExportModal() {
    setModalMode("export");
    setModalArea(JSON.stringify({ checked, revisions, priority, chapterNotes, subjectNotes }));
    setCopyLabel("Copy");
    setModalOpen(true);
  }

  function openImportModal() {
    setModalMode("import");
    setModalArea("");
    setModalOpen(true);
  }

  function handleModalAction() {
    if (modalMode === "export") {
      if (modalTextareaRef.current) {
        modalTextareaRef.current.select();
        try { document.execCommand && document.execCommand("copy"); } catch { /* ignore */ }
      }
      navigator.clipboard && navigator.clipboard.writeText(modalArea).catch(() => { });
      setCopyLabel("Copied ✓");
      setTimeout(() => setCopyLabel("Copy"), 1200);
    } else {
      try {
        const parsed = JSON.parse(modalArea);
        if (parsed.checked || parsed.revisions || parsed.priority || parsed.chapterNotes || parsed.subjectNotes) {
          setChecked(parsed.checked || {});
          setRevisions(parsed.revisions || {});
          setPriority(parsed.priority || {});
          setChapterNotes(parsed.chapterNotes || {});
          setSubjectNotes(parsed.subjectNotes || {});
        } else {
          // legacy export was just the "checked" map
          setChecked(parsed);
          setRevisions({});
          setPriority({});
          setChapterNotes({});
          setSubjectNotes({});
        }
        pingSave();
        setModalOpen(false);
      } catch {
        window.alert("That doesn't look like a valid progress code.");
      }
    }
  }

  /* ============ RENDER HELPERS ============ */
  const subj = DATA[activeSubject];
  const searchLower = search.toLowerCase().trim();

  return (
    <div className="ncert-root">
      <style>{CSS}</style>
      <div className="wrap">

        <div className="register-head">
          <div className="eyebrow">Register No. UPSC/GS/06–12</div>
          <h1 style={{ color: "#333", marginBottom: "12px" }}>NCERT Preparation Register</h1>
          <div className="sub">A chapter-by-chapter completion ledger for the NCERT textbooks (Classes VI–XII) relevant to the UPSC Civil Services GS syllabus — History, Geography, Polity, Economy, Sociology, Art & Culture and Science.</div>

          <div className="head-grid">
            <div className="stats-row">
              <div className="stat"><span className="n">{overall.done}</span><span className="l">Chapters Done</span></div>
              <div className="stat"><span className="n">{overall.total}</span><span className="l">Total Chapters</span></div>
              <div className="stat"><span className="n">{Object.keys(DATA).length}</span><span className="l">Subjects</span></div>
            </div>
            <div className="seal-block">
              <div className={"seal" + (overallPct === 100 ? " done" : "")} style={{ "--pct": overallPct }}>
                <div className="ring"></div>
                <div className="inner"><b>{overallPct}%</b><span>OVERALL</span></div>
              </div>
              <div className="seal-caption">Preparation Seal — fills as chapters are certified read</div>
            </div>
          </div>
        </div>

        <div className="toolbar">
          <button className="btn" onClick={openExportModal}>Export Progress</button>
          <button className="btn" onClick={openImportModal}>Import Progress</button>
          <button className="btn danger" onClick={handleReset}>Reset All</button>
          <span className={"save-indicator" + (saveShown ? " show" : "")}>✓ saved locally</span>
          {dbError && <span style={{ color: "#8B2635", marginLeft: 12 }}>⚠️ Persistence unavailable</span>}
        </div>

        <div className="tabs">
          {Object.keys(DATA).map(sub => {
            const { total, done } = totalCounts(sub);
            return (
              <div
                key={sub}
                className={"tab" + (sub === activeSubject ? " active" : "")}
                onClick={() => setActiveSubject(sub)}
              >
                {DATA[sub].label} <span className="mini">{done}/{total}</span>
              </div>
            );
          })}
        </div>

        <div className="panel">
          <div className="panel-top">
            <div className="panel-title">
              {subj.label}
              <small>Classes {Object.keys(subj.classes).map(c => romans[c]).join(", ")} · NCERT</small>
            </div>
            <div className="search-box">
              <input
                type="text"
                placeholder="Filter chapters…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="legend">
            <span><i style={{ background: "var(--maroon)" }}></i>High yield</span>
            <span><i style={{ background: "var(--gold)" }}></i>Medium</span>
            <span><i style={{ background: "var(--sage)" }}></i>Low</span>
            <span>· click the ●●● badge to log revision passes (0–3) · 🖉 for notes</span>
          </div>

          <div className="subject-notes">
            <label>Subject notes — {subj.label}</label>
            <textarea
              placeholder="Overall strategy, weightage observations, linked current affairs…"
              value={subjectNotes[activeSubject] || ""}
              onChange={e => updateSubjectNote(activeSubject, e.target.value)}
            />
          </div>

          <div className="class-grid">
            {Object.keys(subj.classes).sort((a, b) => a - b).map(cls => {
              const clsData = subj.classes[cls];
              const { total, done } = totalCounts(activeSubject, cls);
              return (
                <div className="class-card" key={cls}>
                  <div className="class-card-head">
                    <span className="roman">Class {romans[cls]}</span>
                    <span className="frac">{done}/{total}</span>
                  </div>

                  {clsData.books.map((book, bi) => (
                    <div className="book" key={bi}>
                      <div className="book-title">{book.title}</div>
                      <ul className="chap-list">
                        {book.chapters.map((chap, ci) => {
                          const k = key(activeSubject, cls, bi, ci);
                          const id = "chk-" + k.replace(/\|/g, "-");
                          const pri = priority[k] || "";
                          const rev = revisions[k] || 0;
                          const hasNote = !!(chapterNotes[k] && chapterNotes[k].trim());
                          const isHidden = searchLower && !chap.toLowerCase().includes(searchLower);
                          const isNoteOpen = !!openNotes[k];

                          return (
                            <li key={ci} className={isHidden ? "hidden" : ""}>
                              <div className="chap-row">
                                <input
                                  type="checkbox"
                                  className="chk"
                                  id={id}
                                  checked={!!checked[k]}
                                  onChange={() => toggleChapter(k)}
                                />
                                <label
                                  className={"chap-text" + (checked[k] ? " done" : "")}
                                  htmlFor={id}
                                >
                                  <span className="chap-num">{ci + 1}.</span>{chap}
                                </label>
                                <div className="chap-controls">
                                  <button
                                    type="button"
                                    className="pri-btn"
                                    data-pri={pri}
                                    title="Priority (click to cycle High → Medium → Low → none)"
                                    onClick={() => cyclePriority(k)}
                                  >
                                    {pri || "·"}
                                  </button>
                                  <button
                                    type="button"
                                    className="rev-badge"
                                    data-rev={rev}
                                    title="Revision passes (click to log, resets after 3)"
                                    onClick={() => cycleRevision(k)}
                                  >
                                    {"●".repeat(rev) || "○"}
                                  </button>
                                  <button
                                    type="button"
                                    className={"note-btn" + (hasNote ? " has-note" : "")}
                                    title="Chapter note"
                                    onClick={() => toggleNoteOpen(k)}
                                  >
                                    🖉
                                  </button>
                                </div>
                              </div>
                              <div className={"chap-note" + (isNoteOpen ? " open" : "")}>
                                <textarea
                                  placeholder="Note — PYQ link, source, doubt…"
                                  value={chapterNotes[k] || ""}
                                  onChange={e => updateChapterNote(k, e.target.value)}
                                />
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}

                  <div className="card-progress">
                    <i style={{ width: (total ? Math.round((done / total) * 100) : 0) + "%" }}></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <footer>— progress is saved to the backend database (backend/db.json) and persists across sessions —</footer>
      </div>

      <div className={"modal-bg" + (modalOpen ? " open" : "")}>
        <div className="modal">
          <h3>{modalMode === "export" ? "Export Progress" : "Import Progress"}</h3>
          <p>
            {modalMode === "export"
              ? "Copy this text somewhere safe. Paste it back into Import next time to restore your progress."
              : "Paste a previously exported progress code below, then load it."}
          </p>
          <textarea
            ref={modalTextareaRef}
            value={modalArea}
            readOnly={modalMode === "export"}
            onChange={event => modalMode === "import" && setModalArea(event.target.value)}
          />
          <div className="row">
            <button className="btn" onClick={() => setModalOpen(false)}>Close</button>
            <button className="btn primary" onClick={handleModalAction}>
              {modalMode === "export" ? copyLabel : "Load"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}