import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Bai4 = () => {
  // Khởi tạo state để theo dõi số lượt chọn của từng trạng thái
  const [votes, setVotes] = useState({ single: 0, taken: 0, lgbt: 0 });
  const [totalVotes, setTotalVotes] = useState(0); // Tổng số lượt chọn

  // Hàm để tính phần trăm
  const calculatePercentage = (count) => {
    if (totalVotes === 0) return 0;
    return ((count / totalVotes) * 100).toFixed(2);
  };

  // Hàm xử lý khi người dùng nhấn vào một lựa chọn
  const handlePress = (type) => {
    const newVotes = { ...votes, [type]: votes[type] + 1 };
    setVotes(newVotes);
    setTotalVotes(totalVotes + 1);
  };

  return (
    <View style={styles.container}>
      <View style={[{ flex: 1, flexDirection: 'row', marginBottom: 10 }]}>
        <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZMgCczGOhgf6b5NvleDfgiVA2KT0aFfdLeqPu7SUtg&s'}} style={{ flex: 0.4, height: '100%' }} />
        <View style={{ flex: 0.6, flexDirection: 'column', justifyContent: 'space-around' }}>
          <Text style={{ color: 'green', fontSize: 25 }}>ĐỘC THÂN: {calculatePercentage(votes.single)}%</Text>
          <Text style={{ color: 'red', fontSize: 25 }}>ĐÃ CÓ CHỦ: {calculatePercentage(votes.taken)}%</Text>
          <Text style={{ color: 'violet', fontSize: 25 }}>LGBT: {calculatePercentage(votes.lgbt)}%</Text>
        </View>
      </View>
      {/* Bao bọc tất cả các phần tử trong một phần tử View */}
      <View>
        <TouchableOpacity 
          style={[styles.square, { flexDirection: 'row', backgroundColor: 'green' }]} 
          onPress={() => handlePress('single')}
        >
          <Text style={styles.text}>ĐỘC THÂN</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.square, { flexDirection: 'row', backgroundColor: 'pink' }]} 
          onPress={() => handlePress('taken')}
        >
          <Text style={styles.text}>ĐÃ CÓ CHỦ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.square, { flexDirection: 'row', backgroundColor: 'violet' }]} 
          onPress={() => handlePress('lgbt')}
        >
          <Text style={styles.text}>LGBT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Bai4;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    padding: 10,
  },
  square: {
    height: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});