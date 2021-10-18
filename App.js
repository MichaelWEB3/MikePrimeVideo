import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, Modal, StatusBar, Image, StyleSheet } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/FontAwesome5';
const Container = styled.View`
    background-color: black;
    flex: 1;

`
const ContainerCorpo = styled.View`
  background-color: #363636	;
  flex-grow:10;
`

const ContainerMenu = styled.View`
 background-color: black;
 
 justify-content: space-around;
 flex-direction: row;
  padding: 20px;
  align-items: center;
`
const ItemMenur = styled.View`

  
  background-color: black	;

`

const PaginaPrincipal = styled.View`
  height: 90%;
  width: 100%;
  background-color: #0f171e;
`

const Logo = styled.View`
    height: 10%;
    width: 100%;
    background-color:  #0f171e;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`
const HeaderNavegar = styled.View`
width: 100%;
  justify-content: space-around;
  flex-direction: row;
  color: white;
`
const Text = styled.Text`
  color: white;
  font-size: 20px;
  margin: 3px;
`
const TextHeadr = styled.Text`
  color: ${props => props.selecionado ? 'white' : '#999'};
  font-size: 15px;
  margin: 3px;
  fontWeight: bold;
`
const HeaderNavegarItem = styled.View`
padding: 5px;
borderBottomWidth:${props => props.selecionado ? 4 : 0};
border-color:white;

`

const Listas = styled.ScrollView`

`
const ListasCapa = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 0px;
  padding: 20px;
  margin-bottom: 10px;
`
const ListasItens = styled.ScrollView`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
 
`

const FilmesLista = styled.Image`
width: 150px;
height: 200px;

`

export default () => {
  //menu bottom
  const [modalPrincipal, setModalPrincipal] = useState(true)


  //header 
  const [headerInicial, setheaderInicial] = useState(true)
  const [headerSeries, setheaderSeries] = useState(false)
  const [headerFilmes, setheaderFilmes] = useState(false)
  const [headerInfa, setheaderInfa] = useState(false)
  const [menu, setMenu] = useState(true)

  //listas
  const [filmes, setFilmes] = useState([])


  useEffect(() => {

    const setarFilmes = async () => {
      const req = await fetch("https://api.b7web.com.br/cinema/")
      const json = await req.json()
      if (json) {

        setFilmes(json)

      }
    }
    setarFilmes()

  }, [])

  function selecionado(item) {

    if (item == 'inicio') {
      setheaderInicial(true)
      setheaderSeries(false)
      setheaderFilmes(false)
      setheaderInfa(false)
    } else if (item == 'series') {
      setheaderInicial(false)
      setheaderSeries(true)
      setheaderFilmes(false)
      setheaderInfa(false)
    } else if (item == 'filmes') {
      setheaderInicial(false)
      setheaderSeries(false)
      setheaderFilmes(true)
      setheaderInfa(false)
    } else if (item == 'infantil') {
      setheaderInicial(false)
      setheaderSeries(false)
      setheaderFilmes(false)
      setheaderInfa(true)
    }
  }




  return (
    <Container>
      <StatusBar backgroundColor="#0f171e"></StatusBar>

      <ContainerCorpo>

        <Modal
          visible={modalPrincipal}
          animationType="slide"
          transparent={true}

        >
          <PaginaPrincipal>

            <Logo><Image source={require('./src/img/logo.png')} style={{ width: 100, height: 100 }} resizeMode="center"></Image></Logo>

            <HeaderNavegar>

              <HeaderNavegarItem selecionado={headerInicial} >
                <TextHeadr selecionado={headerInicial} onPress={() => selecionado('inicio')}>Pagina Inicial</TextHeadr>
              </HeaderNavegarItem>

              <HeaderNavegarItem selecionado={headerSeries} >
                <TextHeadr selecionado={headerSeries} onPress={() => selecionado('series')}>Series</TextHeadr>
              </HeaderNavegarItem>

              <HeaderNavegarItem selecionado={headerFilmes}>
                <TextHeadr selecionado={headerFilmes} onPress={() => selecionado('filmes')}>Filmes</TextHeadr>
              </HeaderNavegarItem>

              <HeaderNavegarItem selecionado={headerInfa} >
                <TextHeadr selecionado={headerInfa} onPress={() => selecionado('infantil')}>Infantil</TextHeadr>
              </HeaderNavegarItem>

            </HeaderNavegar>

            <Listas>
              <ListasCapa source={require('./src/img/capa.jpg')}></ListasCapa>

            <Text style={{fontWeight: 'bold'}}>Continue assistindo</Text>
              <ListasItens horizontal={true} >
                {filmes.map((tarefa, index) => {
                  return (
                   
                    <FilmesLista resizeMode="contain"  key={index} source={{uri:`${tarefa.avatar}`}}></FilmesLista>  
                   
                  )
                })}
              </ListasItens>



             <Text style={{fontWeight: 'bold'}}>Amazon Originais e Exclusivos</Text>
              <ListasItens horizontal={true} >
                {filmes.map((tarefa, index) => {
                  return (
                   
                    <FilmesLista resizeMode="contain"   key={index} source={{uri:`${tarefa.avatar}`}}></FilmesLista>  
                   
                  )
                })}
              </ListasItens>   


                <Text style={{fontWeight: 'bold'}}>Assistir novamente</Text>
              <ListasItens horizontal={true} >
                {filmes.map((tarefa, index) => {
                  return (
                   
                    <FilmesLista resizeMode="contain"  key={index} source={{uri:`${tarefa.avatar}`}}></FilmesLista>  
                   
                  )
                })}
              </ListasItens>  


              <Text style={{fontWeight: 'bold'}}>Adicionados recetemente</Text>
              <ListasItens horizontal={true} >
                {filmes.map((tarefa, index) => {
                  return (
                   
                    <FilmesLista resizeMode="contain" key={index} source={{uri:`${tarefa.avatar}`}}></FilmesLista>  
                   
                  )
                })}
              </ListasItens>  

              <Text style={{fontWeight: 'bold'}}>Melhores Series</Text>
              <ListasItens horizontal={true} >
                {filmes.map((tarefa, index) => {
                  return (
                   
                    <FilmesLista resizeMode="contain"  key={index} source={{uri:`${tarefa.avatar}`}}></FilmesLista>  
                   
                  )
                })}
              </ListasItens>  

              <Text style={{fontWeight: 'bold'}}>Filmes para toda Familia</Text>
              <ListasItens horizontal={true} >
                {filmes.map((tarefa, index) => {
                  return (
                   
                    <FilmesLista resizeMode="contain"  key={index} source={{uri:`${tarefa.avatar}`}}></FilmesLista>  
                   
                  )
                })}
              </ListasItens>  
            </Listas>
            

          </PaginaPrincipal>

        </Modal>
      </ContainerCorpo >
      <ContainerMenu>
        <ItemMenur><IconA name="house-user" size={30} color="#999" /></ItemMenur>
        <ItemMenur><Icon name="search" size={30} color="#999" /></ItemMenur>
        <ItemMenur><Icon name="download" size={30} color="#999" /></ItemMenur>
        <ItemMenur><IconA name="user-circle" size={30} color="#999" /></ItemMenur>

      </ContainerMenu>
    </Container >
  )
}

const style = StyleSheet.create({
  imagem: {

    height: 100,
    width: 200,
    flex: 1,
    padding: 5
  }
})