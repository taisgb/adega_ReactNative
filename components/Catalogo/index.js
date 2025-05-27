import React from "react";
import { View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';

import vinho1 from '../../assets/vinho-branco.jpg';
import vinho2 from '../../assets/vinho-tinto.jpg';
import vinho3 from '../../assets/vinho-rose.jpg';
import vinho4 from '../../assets/vinho-especial.jpg';



export default function TelaCatalogo(){
    return (
    <View style={styles.container}>
        <ScrollView style={styles.containerScroll}> 
            <Text style={styles.titulo}>
                Nossos Vinhos
            </Text>

            <View style={styles.cardVinho}>
                <Image 
                resizeMode="contain"
                style={styles.vinhoImg}
                source={ vinho1 }
                />
                <View style={styles.cardBoxDescricao}>
                    <Text style={styles.cardTitulo}>
                    Chatigny Chardonnay
                    </Text>
                    <Text style={styles.cardDescricao}>
                        Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.
                    </Text>
                </View>                
            </View>

            <View style={styles.cardVinho}>
                <Image 
                resizeMode="contain"
                style={styles.vinhoImg}
                source={ vinho3 }
                />

                <View style={styles.cardBoxDescricao}>
                    <Text style={styles.cardTitulo}> Concha y Toro Exportacion </Text>                    
                    <Text style={styles.cardDescricao}> Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos</Text>          
                    
                </View>                 
            </View>

            <View style={styles.cardVinho}>
                <Image 
                resizeMode="contain"
                style={styles.vinhoImg}
                source={ vinho2 }
                />

                <View style={styles.cardBoxDescricao}>
                    <Text style={styles.cardTitulo}> Portada Winemaker's </Text>                    
                    <Text style={styles.cardDescricao}> Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>          
                </View>                 
            </View>

            <View style={styles.cardVinho}>
                <Image 
                resizeMode="contain"
                style={styles.vinhoImg}
                source={ vinho4 }
                />

                <View style={styles.cardBoxDescricao}>
                    <Text style={styles.cardTitulo}> Elvio Cogno Ravera Barolo </Text>                    
                    <Text style={styles.cardDescricao}> Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>          
                </View>                 
            </View>                
    
        </ScrollView>
    </View>
    )
}



