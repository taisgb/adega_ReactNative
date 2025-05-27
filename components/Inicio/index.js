import React from "react";
import { View, Text, ImageBackground} from 'react-native';
import styles from '../styles';
import imgCapa from '../../assets/capa.jpg';


export default function TelaInicial(){
    return (
        <ImageBackground 
        source={ imgCapa }
        style={styles.container}
        blurRadius={3}
        resizeMode="cover"       
        >
            <Text style={ styles.titulo }>
                Sua Adega Preferida
            </Text>
            <Text style={ styles.subtitulo }>Aqui você encontra os melhores e mais saborosos vinhos.</Text>

        </ImageBackground>
    )
}



