import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i")',
  '*': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': ''Open Sans', sans-serif'
  },
  'ul': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': ''Open Sans', sans-serif'
  },
  'li': {
    'listStyle': 'none'
  },
  'a': {
    'textDecoration': 'none'
  },
  'body': {
    'backgroundImage': 'url(../img/fondo.png)',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'u--login': {
    'width': [{ 'unit': 'em', 'value': 23 }]
  },
  'formulario': {
    'background': 'white',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'borderRadius': '0.8em',
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(3, 2, 2, 0.64)' }]
  },
  'linea': {
    'height': [{ 'unit': 'px', 'value': 1 }],
    'background': '#911720',
    'width': [{ 'unit': 'em', 'value': 10 }],
    'margin': [{ 'unit': 'em', 'value': 0.8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'formulario--title': {
    'fontSize': [{ 'unit': 'em', 'value': 1.6 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
  },
  'formulario--campos': {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center'
  },
  'formulario--campos li': {
    'margin': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'formulario--campos li div': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }]
  },
  'formulario--campos li nombre': {
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }]
  },
  'formulario--campos input': {
    'background': '#F0F0F1',
    'height': [{ 'unit': 'em', 'value': 2 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.5 }],
    'width': [{ 'unit': 'em', 'value': 22 }],
    'borderRadius': '0.6em',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'formulario--boton': {
    'margin': [{ 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }]
  },
  'formulario--boton a': {
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 3 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 3 }],
    'borderRadius': '0.4em',
    'color': 'white',
    'background': '#911720',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(3, 2, 2, 0.64)' }]
  },
  'formulario--boton a:hover': {
    'background': '#983038'
  },
  'formulario--link': {
    'display': 'flex',
    'justifyContent': 'space-around',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'px', 'value': 0 }]
  },
  'formulario--link a': {
    'color': '#000000'
  },
  'formulario--link a:hover': {
    'color': '#901720'
  },
  'formulario--link link-r a': {
    'color': '#901720',
    'fontWeight': 'bold'
  },
  'formulario--link link-r a:hover': {
    'color': '#3A080C'
  }
});
