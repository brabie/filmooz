import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

filmContainer: {
  flexDirection: 'row',
  backgroundColor: '#960000',
  color: '#fff',
  width: 340,
  height: 150,
  marginBottom: 5,
  borderRadius:3
},

imageFilm: {
  flex: 1,
  backgroundColor: '#1c1c1c',
  marginRight: 5,
  borderTopLeftRadius:3,
  borderBottomLeftRadius:3
},

infoFilm: {
  flexDirection: 'column',
   flex:2,
   padding: 5,
   marginRight: 2
},

headerFilm:{
  flexDirection: 'row'
},

filmTitle:{
  flex: 1,
  flexWrap: 'wrap',
  paddingRight: 5,
  color: '#fff',
  fontWeight: 'bold',
  height: 40
},

filmVote: {
color: '#d4ff00',
backgroundColor: '#ff0000',
height: 25,
padding: 3,
borderRadius:3
},

descriptionFilm1:{
},

filmOverview:{
  color: '#dbdbdb',
  fontSize: 11,
  fontStyle: 'italic',
  marginBottom:5
},
filmDate:{
  color: '#000',
  //color: '#1c1c1c',
  textAlign: 'right',
},
});
