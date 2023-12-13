import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const [darkTheme, setdarkTheme] = useState(false);
  const [result,setresult] =useState('');

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
    purple: '#F7F7'

  };

   const calci = (title) => {
  if (title =='C') {
    setresult('');
  } else if (title == 'R') {
    setresult(result.substring(0, result.length - 1));
  } else if(title === '=')
  {
   setresult(eval(result));
  } 
  else {
    setresult(result + title);
  }
};

  const Btn = ({title,type}) => (
    <TouchableOpacity
    onPress={()=> calci(title)} 
    style={{padding:10,borderRadius:10,elevation:2,
    backgroundColor:getColor(colors.light1,colors.dark1),
    height:70,width:60 ,margin:16}}>
        <Text style={{fontSize: 37,color:"black",textAlign:"center",
        textAlignVertical:"center",color:getBtncolor(type)}}>{title}</Text>
      </TouchableOpacity>
  )

const getBtncolor = (type) => {
  if(type=='T'){
    return '#35FBD6'
  }
  else if(type == 'R'){
    return '#EB6363'
  }
  else{
    return getColor(colors.dark,colors.light);
  }
}


const getColor =(light,dark)=>darkTheme ? dark:light;


  return (
    <View 
    style={{
    height:'100%',
    width:"100%",
    paddingVertical:20,
    backgroundColor:getColor(colors.light,colors.dark),
    alignItems: 'center' }}>
      <Switch 
      value={darkTheme} onValueChange={() => setdarkTheme(!darkTheme)} 
      thumbColor = {getColor(colors.dark,colors.light)} trackColor={{true:colors.light2,false:colors.dark2}} />
      <Text style={{
        fontSize:42,
      color: getColor(colors.dark,colors.light),
      width:"100%",textAlign:"right",paddingRight:20,marginTop:160,paddingBottom:20}}> {result}</Text>
      
        <View style={{flexDirection:"row",flexWrap: "wrap",justifyContent:'center',
        backgroundColor: getColor(colors.light1,colors.dark),borderTopRightRadius:20,borderTopLeftRadius:20}}>
         <Btn title="C" type="T"/>
         <Btn title="R" type="T"/>
         <Btn title="/" type="T"/>
         <Btn title="%" type="T" />
         <Btn title="9" type="N"/>
         <Btn title="8" type="N"/>
         <Btn title="7" type="N"/>
         <Btn title="*" type="R"/>
         <Btn title="6" type="N"/>
         <Btn title="5" type="N"/>
         <Btn title="4" type="N"/>
         <Btn title="-" type="R"/>
         <Btn title="3" type="N"/>
         <Btn title="2" type="N"/>
         <Btn title="1" type="N"/>
         <Btn title="+" type="R"/>
         <Btn title="10" type="N"/>
         <Btn title="." type="N"/>
         <Btn title="0" type="N"/>
         <Btn title="=" type="R"/>

        </View>
    </View>
  )
}