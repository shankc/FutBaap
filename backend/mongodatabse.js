
use Teams
db.PLTeams.insert([
{"TeamName":"Leicester City",
  "LogoURL":"https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/220px-Leicester_City_crest.svg.png"
},
{"TeamName":"Arsenal",
  "LogoURL":"http://icons.iconseeker.com/png/fullsize/soccer-teams/arsenal-fc-logo.png"

},
{
"TeamName":"Tottenham Hotspur",
  "LogoURL":"http://futhead.cursecdn.com/static/img/14/clubs/18.png"

},
{
 "TeamName":"Manchester City",
 "LogoURL":"http://sharealogo.com/wp-content/uploads/Manchester_City_FC.png"
},
{
  "TeamName":"Manchester United",
  "LogoURL":"https://s-media-cache-ak0.pinimg.com/236x/6f/74/b2/6f74b2d0d0c705892bdba396e50873ae.jpg"
},
{
 "TeamName":"Southampton",
 "LogoURL":"http://futhead.cursecdn.com/static/img/15/clubs_large/17.png"
},

{
"TeamName":"West Ham United",
"LogoURL":"http://www.fetchlogos.com/wp-content/uploads/2015/12/West-Ham-United-Logo.jpg"
},
{
  "TeamName":"Liverpool",
  "LogoURL":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPF-OokbdTT3jvE_ntuwQCH9qoBO903HWkxcDIbbvRlk5WQLTW"
},
{
"TeamName":"Stoke City",
"LogoURL":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgMhnFkncQL3hDWVC25hD5_mxLHRtl30ry17z0NtnbeIYNaEdvUFTHGg"
},
{
  "TeamName":"Chelsea",
  "LogoURL":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6IDlOOnvKlT6YKjaX3wFV2HmZTYjzsEgKTjh__mcYg863VbtHiNFAkg"
}
])

show collection

use TeamRoster
db.TeamPLayers.insert([
{
  "TeamName":"Leicester City",
   "Squad":[
   {
     "PlayerName":"Kasper Schmeichel",
     "Position":"GK"   
   },
   {
     "PlayerName":"Richie De Laet",
     "Position":"DF"
   },
   {
   "PlayerName":"Wes Morgan",
     "Position":"DF"
   },
    {
   "PlayerName":"Robert Huth",
     "Position":"DF"
   },
   {
   "PlayerName":"Danny Simpson",
     "Position":"DF"
   },
   {
      "PlayerName":"Jeff Schlupp",
     "Position":"DF"
   },
   {
   "PlayerName":"Liam Moore",
     "Position":"DF"
   },
   {
   "PlayerName":"Marcin Wasilewski",
     "Position":"DF"
   },
   {
      "PlayerName":"Christian Fuchs",
     "Position":"DF"
   },
   {
     "PlayerName":"Yohan Benalouane",
     "Position":"DF"
   },
   {
    "PlayerName":"Ben Chilwell",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Danny Drinkwater",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Matty James",
     "Position":"MF"
   },
   
   {
   "PlayerName":"Andy King",
     "Position":"MF"
   
   },
   {
     "PlayerName":"Marc Albrighton",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Daniel Amartey",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Demarai Gray",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"Riyad Mahrez",
     "Position":"MF"
   },
   {
   "PlayerName":"Gökhan Inler",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Jamie Vardy",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Tom Lawrence",
   "Position":"FW"
  },
  {
   "PlayerName":"Shinji Okazaki",
   "Position":"FW"
  },
  {
  "PlayerName":"	Leonardo Ulloa",
   "Position":"FW"
  },
   ]
},

{

"TeamName":"Arsenal",
   "Squad":[
   {
     "PlayerName":"Peter Cech",
     "Position":"GK"   
   },
   {
     "PlayerName":"Mathieu Debuchy",
     "Position":"DF"
   },
   {
   "PlayerName":"Kieran Gibbs",
     "Position":"DF"
   },
    {
   "PlayerName":"Per Mertesacker",
     "Position":"DF"
   },
   {
   "PlayerName":"Gabriel",
     "Position":"DF"
   },
   {
      "PlayerName":"Laurent Koscielny",
     "Position":"DF"
   },
   {
   "PlayerName":"Nacho Monreal",
     "Position":"DF"
   },
   {
   "PlayerName":"Calum Chambers",
     "Position":"DF"
   },
   {
      "PlayerName":"	Héctor Bellerín",
     "Position":"DF"
   },
   {
     "PlayerName":"Carl Jenkinson",
     "Position":"DF"
   },
   {
    "PlayerName":"Rob Holding",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Aaron Ramsey",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Jack Wilshere",
     "Position":"MF"
   },
   
   {
   "PlayerName":"Mesut Özil",
     "Position":"MF"
   
   },
   {
     "PlayerName":"Alex Oxlade-Chamberlain",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Santi Cazorla",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Demarai Gray",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"Granit Xhaka",
     "Position":"MF"
   },
   {
   "PlayerName":"Francis Coquelin",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Alexis Sánchez",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Olivier Giroud",
   "Position":"FW"
  },
  {
   "PlayerName":"Theo Walcott",
   "Position":"FW"
  },
  {
  "PlayerName":"	Danny Welbeck",
   "Position":"FW"
  },
 
   ]


},

{
  
	"TeamName":"Tottenham Hotspur",
   "Squad":[
   {
     "PlayerName":"Hugo Lloris",
     "Position":"GK"   
   },
   {
     "PlayerName":"Kyle Walker",
     "Position":"DF"
   },
   {
   "PlayerName":"Danny Rose",
     "Position":"DF"
   },
   
    {
   "PlayerName":"Toby Alderweireld",
     "Position":"DF"
   },
   {
   "PlayerName":"Jan Vertonghen",
     "Position":"DF"
   },
   {
      "PlayerName":"Eric Dier",
     "Position":"DF"
   },
   {
   "PlayerName":"Kevin Wimmer",
     "Position":"DF"
   },
   {
   "PlayerName":"Ben Davies",
     "Position":"DF"
   },
   {
      "PlayerName":"	Kieran Trippier",
     "Position":"DF"
   },
   {
     "PlayerName":"Federico Fazio",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Nabil Bentaleb",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Érik Lamela",
     "Position":"MF"
   },
   
   {
   "PlayerName":"Mousa Dembélé",
     "Position":"MF"
   
   },
   {
     "PlayerName":"Dele Alli",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Christian Eriksen",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Nacer Chadli",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"Alex Pritchard",
     "Position":"MF"
   },
   {
   "PlayerName":"Victor Wanyama",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Son Heung-min",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Clinton N'Jie",
   "Position":"FW"
  },
  {
   "PlayerName":"Harry Kane",
   "Position":"FW"
  },
  {
  "PlayerName":"	Vincent Janssen",
   "Position":"FW"
  }
 
   ]
},
{
"TeamName":"Manchester City",
   "Squad":[
   {
     "PlayerName":"Joe Hart",
     "Position":"GK"   
   },
   {
     "PlayerName":"Bacary Sagna",
     "Position":"DF"
   },
   {
   "PlayerName":"Vincent Kompany",
     "Position":"DF"
   },
   
    {
   "PlayerName":"Pablo Zabaleta",
     "Position":"DF"
   },
   {
   "PlayerName":"Aleksandar Kolarov",
     "Position":"DF"
   },
   {
      "PlayerName":"Eliaquim Mangala",
     "Position":"DF"
   },
   {
   "PlayerName":"Gaël Clichy",
     "Position":"DF"
   },
   {
   "PlayerName":"Nicolás Otamendi",
     "Position":"DF"
   },
   {
      "PlayerName":"	Angeliño",
     "Position":"DF"
   },
   {
     "PlayerName":"Jason Denayer",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Fernando",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Raheem Sterling",
     "Position":"MF"
   },
   
   {
   "PlayerName":"Samir Nasri",
     "Position":"MF"
   
   },
   {
     "PlayerName":"İlkay Gündoğan",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Kevin De Bruyne",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Jesús Navas",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"Yaya Touré",
     "Position":"MF"
   },
   {
   "PlayerName":"David Silva",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Nolito",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Sergio Agüero",
   "Position":"FW"
  },
  {
   "PlayerName":"Wilfried Bony",
   "Position":"FW"
  },
  {
  "PlayerName":"	VKelechi Iheanacho",
   "Position":"FW"
  }
 
   ]
},
{
"TeamName":"Manchester United",
   "Squad":[
   {
     "PlayerName":"David de Gea",
     "Position":"GK"   
   },
   {
     "PlayerName":"Eric Bailly",
     "Position":"DF"
   },
   {
   "PlayerName":"Phil Jones",
     "Position":"DF"
   },
   
    {
   "PlayerName":"Marcos Rojo",
     "Position":"DF"
   },
   {
   "PlayerName":"Chris Smalling",
     "Position":"DF"
   },
   {
      "PlayerName":"	Luke Shaw",
     "Position":"DF"
   },
   {
   "PlayerName":"Matteo Darmian",
     "Position":"DF"
   },
   {
   "PlayerName":"Cameron Borthwick-Jackson",
     "Position":"DF"
   },
   {
      "PlayerName":"	Paddy McNair",
     "Position":"DF"
   },
   {
     "PlayerName":"Tyler Blackett",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Juan Mata",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Jesse Lingard",
     "Position":"MF"
   },
   
   {
   "PlayerName":"Antonio Valencia",
     "Position":"MF"
   
   },
   {
     "PlayerName":"Daley Blind",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Ashley Young",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Ander Herrera",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"Henrikh Mkhitaryan",
     "Position":"MF"
   },
   {
   "PlayerName":"Bastian Schweinsteiger",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Memphis Depay",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Zlatan Ibrahimović",
   "Position":"FW"
  },
  {
   "PlayerName":"Wayne Rooney",
   "Position":"FW"
  },
  {
  "PlayerName":"	Marcus Rashford",
   "Position":"FW"
  },
   {
  "PlayerName":"	Anthony Martial",
   "Position":"FW"
  }
 
 
   ]
},

{

"TeamName":"SouthHampton",
   "Squad":[
   {
     "PlayerName":"Fraser Forster",
     "Position":"GK"   
   },
   {
     "PlayerName":"Cédric Soares",
     "Position":"DF"
   },
   {
   "PlayerName":"Maya Yoshida",
     "Position":"DF"
   },
   
    {
   "PlayerName":"Florin Gardoș",
     "Position":"DF"
   },
   {
   "PlayerName":"José Fonte",
     "Position":"DF"
   },
   {
      "PlayerName":"Virgil van Dijk",
     "Position":"DF"
   },
   {
   "PlayerName":"Ryan Bertrand",
     "Position":"DF"
   },
   {
   "PlayerName":"Cuco Martina",
     "Position":"DF"
   },
   {
      "PlayerName":"	Matt Targett",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Jordy Clasie",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Steven Davis",
     "Position":"MF"
   },
   
   {
   "PlayerName":"Dušan Tadić",
     "Position":"MF"
   
   },
   {
     "PlayerName":"Oriol Romeu",
     "Position":"MF"
   },
   
   {
    "PlayerName":"James Ward-Prowse",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Lloyd Isgrove",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"Harrison Reed",
     "Position":"MF"
   },
   {
   "PlayerName":"Pierre-Emile Højbjerg",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Shane Long",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Jay Rodriguez",
   "Position":"FW"
  },
  {
   "PlayerName":"Charlie Austin",
   "Position":"FW"
  },
  {
  "PlayerName":"	Marcus Barnes",
   "Position":"FW"
  },
   {
  "PlayerName":"	Olufela Olomola",
   "Position":"FW"
  }
 
 
   ]
},

{

"TeamName":"West Ham United",
   "Squad": [
   {
     "PlayerName":"Darren Randolph",
     "Position":"GK"   
   },
   {
     "PlayerName":"Winston Reid",
     "Position":"DF"
   },
   {
   "PlayerName":"Aaron Cresswell",
     "Position":"DF"
   },
   
    {
   "PlayerName":"Angelo Ogbonna",
     "Position":"DF"
   },
   {
   "PlayerName":"James Collins",
     "Position":"DF"
   },
   {
      "PlayerName":"	Sam Byram",
     "Position":"DF"
   },
   {
   "PlayerName":"Doneil Henry",
     "Position":"DF"
   },
   {
   "PlayerName":"Reece Burke",
     "Position":"DF"
   },
   {
      "PlayerName":"	Lewis Page",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Håvard Nordtveit",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Sofiane Feghouli",
     "Position":"MF"
   },
   
   {
   "PlayerName":"Cheikhou Kouyaté",
     "Position":"MF"
   
   },
   {
     "PlayerName":"Pedro Obiang",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Mark Noble",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Manuel Lanzini",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"Dimitri Payet",
     "Position":"MF"
   },
   {
   "PlayerName":"Diego Poyet",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Andy Carroll",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Jay Rodriguez",
   "Position":"FW"
  },
  {
   "PlayerName":"Ashley Fletcher",
   "Position":"FW"
  },
  {
  "PlayerName":"	Diafra Sakho",
   "Position":"FW"
  },
   {
  "PlayerName":"	Enner Valencia",
   "Position":"FW"
  }
 
 
   ]

},

{

"TeamName":"Liverpool",
   "Squad":[
   {
     "PlayerName":"Simon Mignolet",
     "Position":"GK"   
   },
   {
     "PlayerName":"Nathaniel Clyne",
     "Position":"DF"
   },
   {
   "PlayerName":"Mamadou Sakho",
     "Position":"DF"
   },
   
    {
   "PlayerName":"Dejan Lovren",
     "Position":"DF"
   },
   {
   "PlayerName":"Joe Gomez",
     "Position":"DF"
   },
   {
      "PlayerName":"Alberto Moreno",
     "Position":"DF"
   },
   {
   "PlayerName":"Jon Flanagan",
     "Position":"DF"
   },
   {
   "PlayerName":"Tiago Ilori",
     "Position":"DF"
   },
   {
      "PlayerName":"	Ragnar Klavan",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Lucas Leiva",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Georginio Wijnaldum",
     "Position":"MF"
   },
   
   {
   "PlayerName":"James Milner",
     "Position":"MF"
   
   },
   {
     "PlayerName":"Jordan Henderson",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Philippe Coutinho",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Adam Lallana",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"Emre Can",
     "Position":"MF"
   },
   {
   "PlayerName":"Lazar Marković",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Christian Benteke",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Roberto Firmino",
   "Position":"FW"
  },
  {
   "PlayerName":"Daniel Sturridge",
   "Position":"FW"
  },
  {
  "PlayerName":"	Sadio Mané",
   "Position":"FW"
  },
   {
  "PlayerName":"	Divock Origi",
   "Position":"FW"
  }
 
 
   ]

},

{
"TeamName":"Stoke City",
   "Squad":[
   {
     "PlayerName":"Jack Butland",
     "Position":"GK"   
   },
   {
     "PlayerName":"Phil Bardsley",
     "Position":"DF"
   },
   {
   "PlayerName":"Erik Pieters",
     "Position":"DF"
   },
   
    {
   "PlayerName":"Marc Muniesa",
     "Position":"DF"
   },
   {
   "PlayerName":"Glen Johnson",
     "Position":"DF"
   },
   {
      "PlayerName":"Ryan Shawcross",
     "Position":"DF"
   },
   {
   "PlayerName":"Dionatan Teixeira",
     "Position":"DF"
   },
   {
   "PlayerName":"Philipp Wollscheid",
     "Position":"DF"
   },
   {
      "PlayerName":"	Geoff Cameron",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Joe Allen",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Glenn Whelan",
     "Position":"MF"
   },
   
   {
   "PlayerName":"Stephen Ireland",
     "Position":"MF"
   
   },
   {
     "PlayerName":"Ibrahim Afellay",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Charlie Adam",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Xherdan Shaqiri",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"Giannelli Imbula",
     "Position":"MF"
   },
   {
   "PlayerName":"Ollie Shenton",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Marko Arnautović",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Joselu",
   "Position":"FW"
  },
  {
   "PlayerName":"Mame Biram Diouf",
   "Position":"FW"
  },
  {
  "PlayerName":"	Bojan",
   "Position":"FW"
  },
   {
  "PlayerName":"	Jonathan Walters",
   "Position":"FW"
  }
 
 
   ]

},

{
"TeamName":"Chelsea",
   "Squad":[
   {
     "PlayerName":"Thibaut Courtois",
     "Position":"GK"   
   },
   {
     "PlayerName":"Branislav Ivanović",
     "Position":"DF"
   },
   {
   "PlayerName":"John Terry",
     "Position":"DF"
   },
   
    {
   "PlayerName":"Gary Cahill",
     "Position":"DF"
   },
   {
   "PlayerName":"César Azpilicueta",
     "Position":"DF"
   },
   {
      "PlayerName":"Kurt Zouma",
     "Position":"DF"
   },
   {
   "PlayerName":"Baba Rahman",
     "Position":"DF"
   },
   {
   "PlayerName":"Kurt Zouma",
     "Position":"DF"
   },
   {
      "PlayerName":"	Matt Miazga",
     "Position":"DF"
   },
   
   {
     "PlayerName":"Willian",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Cesc Fàbregas",
     "Position":"MF"
   },
   
   {
   "PlayerName":"N'Golo Kanté",
     "Position":"MF"
   
   },
   {
     "PlayerName":"Oscar",
     "Position":"MF"
   },
   
   {
    "PlayerName":"Eden Hazard",
     "Position":"MF"
   },
   
   {
     "PlayerName":"Pedro",
     "Position":"MF"
   
   },
   
   {
    "PlayerName":"John Obi Mikel",
     "Position":"MF"
   },
   {
   "PlayerName":"Nemanja Matić",
   "Position":"MF"
  },
  
  {
     "PlayerName":"Diego Costa",
   "Position":"FW"
  },
  
  {
     "PlayerName":"Bertrand Traoré",
   "Position":"FW"
  },
  {
   "PlayerName":"Michy Batshuayi",
   "Position":"FW"
  },
  {
  "PlayerName":"	Loïc Rémy",
   "Position":"FW"
  },
 
   ]


},
])
db.TeamPLayers.find().pretty()





