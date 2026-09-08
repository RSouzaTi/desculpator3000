import { geradorDesculpa } from "@/services/ai/generator";
import { styles } from "@/styles";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [evento, setEvento] = useState("");
  const [resposta, setResposta] = useState("");

  const callDesculpa = async () => {
    const desculpa = await geradorDesculpa(evento);
    setResposta(desculpa);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Desculpator 3000</Text>
      <Text style={styles.subtitulo}>
        sua maquina de desculpas profissional
      </Text>

      <TextInput
        value={evento}
        placeholder="Digite o evento que você quer evitar ... "
        onChangeText={setEvento}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={callDesculpa}>
        <Text style={styles.buttonText}>Gerar Desculpa</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sua Desculpa está pronta </Text>
        <Text style={styles.cardText}>{resposta}</Text>
      </View>
    </View>
  );
}
