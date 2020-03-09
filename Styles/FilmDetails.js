import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  loading_container:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  SV_Container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageFilm:{
    flex: 1,
    width: '100%',
    height : 520,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Title:{
    color: '#d01616',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  favIcon:{
    marginTop: 15,
    width: 55,
    height: 50
  },
  descriptionFilm:{
    color: '#fff',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'justify',
    elevation: 50
  },

  Vote:{
    color: '#fff',
    textAlign: 'center'
  },
  Popularity:{
    color: '#fff',
    textAlign: 'center'
  },
  dateFilm:{
    color: '#fff',
    textAlign: 'center'
  },
  Numbers:{
    marginBottom: '15%',
  },
  btnBack:{
    backgroundColor: '#d01616',
  },
  btnText:{
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold'
  }
})
