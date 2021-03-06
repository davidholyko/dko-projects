import nflstats from '../../images/nflstats.webp'
import smitechart from '../../images/smitechart.webp'
import memorygame from '../../images/memorygame.webp'
import tictactoe from '../../images/tictactoe.webp'
import brainage from '../../images/brainage.webp'
import letterbox from '../../images/letterbox.webp'
import stackoverko from '../../images/stackoverko.webp'
import fizzbuzz from '../../images/fizzbuzz.webp'
import weatherapp from '../../images/weatherapp.webp'
import momentum from '../../images/momentum.webp'
import resume0 from '../../images/resume0.webp'
import resume from '../../images/resume.webp'
import portfolio0 from '../../images/portfolio0.webp'
import portfolio from '../../images/portfolio.webp'

export const projectsData = [
  { name: 'NFL Stats',
    deployed: 'https://nfl-stats-davidko.herokuapp.com',
    repo: 'https://github.com/davidholyko/NFLstats',
    image: nflstats,
    description: 'Very first project, written in Python',
    goal: 'Display NFL data and try to do some stats about trends',
    status: 'No longer maintaining'
  },
  { name: 'SmiteChart',
    deployed: 'https://smitechart.herokuapp.com',
    repo: 'https://github.com/davidholyko/SmiteChart',
    image: smitechart,
    description: 'Personal Project to help quantify character strengths',
    goal: 'Visualize strengths of each character to help team in Picks and Bans phase for scrims',
    status: 'No longer maintaining'
  },
  { name: 'Card Memory Game',
    deployed: 'https://davidholyko.github.io/dko-memory-game',
    repo: 'https://github.com/davidholyko/dko-memory-game',
    image: memorygame,
    description: 'General Assembly Pre-Work mini project',
    goal: 'Practice JavaScript, HTML, CSS',
    status: 'Completed and Refactored. No longer maintaining'
  },
  { name: 'Tic-Tac-Toe',
    deployed: 'https://davidholyko.github.io/dko-tic-tac-toe-client',
    repo: 'https://github.com/davidholyko/dko-tic-tac-toe-client',
    image: tictactoe,
    description: 'General Assembly Project (1)',
    goal: 'Practice jQuery, API requests, hide/show at correct times',
    status: 'Completed. No longer maintaining'
  },
  { name: 'Brain Age',
    deployed: 'https://davidholyko.github.io/dko-brain-age-front-end',
    repo: 'https://github.com/davidholyko/dko-brain-age-front-end',
    image: brainage,
    description: 'General Assembly Project (2)',
    goal: 'Practice Ruby on Rails, Node packages like Chart.js',
    status: 'Completed. No longer maintaining'
  },
  { name: 'LetterBox',
    deployed: 'https://m-d-h-s.github.io/mdhs-blog-frontend',
    repo: 'https://github.com/m-d-h-s/mdhs-blog-frontend',
    image: letterbox,
    description: 'General Assembly Team Project (3)',
    goal: 'Practice Teamwork, Agile Methodologies, Express.js',
    status: 'Completed. No longer maintaining'
  },
  { name: 'StackOverKo',
    deployed: 'https://davidholyko.github.io/dko-stackoverko-client',
    repo: 'https://github.com/davidholyko/dko-stackoverko-client',
    image: stackoverko,
    description: 'General Assembly Capstone Project (4)',
    goal: 'Practice React.js, importing Components from other libraries',
    status: 'Completed. Currently maintaining'
  },
  { name: 'Fizzbuzz',
    deployed: 'https://davidholyko.github.io/dko-fizzbuzz',
    repo: 'https://github.com/davidholyko/dko-fizzbuzz',
    image: fizzbuzz,
    description: 'Visualization of Fizzbuzz produced dynamically',
    goal: 'Practice Advanced JavaScript Syntax',
    status: 'Completed. No longer maintaining'
  },
  { name: 'Weather App',
    deployed: 'https://davidholyko.github.io/dko-weather-app/',
    repo: 'https://github.com/davidholyko/dko-weather-app',
    image: weatherapp,
    description: 'A simple weather application',
    goal: 'Practice using third party APIs',
    status: 'Completed. No longer maintaining'
  },
  { name: 'Momentum',
    deployed: 'https://davidholyko.github.io/dko-momentum',
    repo: 'https://github.com/davidholyko/dko-momentum',
    image: momentum,
    description: 'Remake of the popular Google Chrome Extension Momentum',
    goal: 'Practice React.js, CSS',
    status: 'Completed. No longer maintaining'
  },
  { name: 'Resume (deprecated)',
    deployed: 'https://davidholyko.github.io/dko-resume-deprecated',
    repo: 'https://github.com/davidholyko/dko-resume-deprecated',
    image: resume0,
    description: 'Web Application that mimics a US letter size resume',
    goal: 'Practice CSS',
    status: 'Completed. No longer maintaining'
  },
  { name: 'Resume',
    deployed: 'https://davidholyko.github.io/resume',
    repo: 'https://github.com/davidholyko/resume',
    image: resume,
    description: 'Web Application that mimics a US letter size resume',
    goal: 'Practice React.js, CSS',
    status: 'Completed. Currently maintaining'
  },
  { name: 'Portfolio (deprecated)',
    deployed: 'https://davidholyko.github.io/davidholyko.github.io-deprecated',
    repo: 'https://github.com/davidholyko/davidholyko.github.io-deprecated',
    image: portfolio0,
    description: 'Ultra flashy portfolio with heavy animations and colors',
    goal: 'Practice Handlebars.js, Animations, Bootstrap, CSS',
    status: 'Completed. No longer maintaining'
  },
  { name: 'Portfolio',
    deployed: 'https://davidholyko.github.io',
    repo: 'https://github.com/davidholyko/davidholyko.github.io',
    image: portfolio,
    description: 'Minimialist portfolio, designed for readability',
    goal: 'Practice React.js, UX/UI, Mobile Design',
    status: 'Completed. Currently maintaining'
  }

]
