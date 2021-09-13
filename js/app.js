/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

// default settings

particlesJS(
  'particles-js',
  {
    'particles': {
      'number': {
        'value': 38
      },
      'color': {
        'value': ['#492B2E', '#EC3236', '#575757']
      },
      'shape': {
        'type': 'circle'
      },
      'opacity': {
        'value': 1,
        'random': false,
        'anim': {
          'enable': false
        }
      },
      'size': {
        'value': 3,
        'random': true,
        'anim': {
          'enable': false,
        }
      },
      'line_linked': {
        'enable': false
      },
      'move': {
        'enable': true,
        'speed': 2,
        'direction': 'none',
        'random': true,
        'straight': false,
        'out_mode': 'out'
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': false
        },
        'onclick': {
          'enable': false
        },
        'resize': true
      }
    },
    'retina_detect': true
}

);
