import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const studentsData = [
  {
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: 'pass',
  },
  {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'pass',
  },
  {
    mssv: 'PS0002',
    name: 'Nguyen Van C',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'failed',
  },
  {
    mssv: 'PS0003',
    name: 'Nguyen Van D',
    avgPoint: 10,
    avgTraningPoint: 10,
    status: 'pass',
  },
  {
    mssv: 'PS0004',
    name: 'Nguyen Van E',
    avgPoint: 10,
    avgTraningPoint: 2,
    status: 'pass',
  },
];

const MainComponent = () => {
  const [eligibleStudents, setEligibleStudents] = useState([]);

  useEffect(() => {
    // Loại bỏ sinh viên có status là failed
    const filteredStudents = studentsData.filter(student => student.status === 'pass');
    setEligibleStudents(filteredStudents);
  }, []);

  // Sắp xếp danh sách sinh viên theo điểm số từ cao xuống thấp
  const sortByAvgPoint = [...eligibleStudents].sort((a, b) => b.avgPoint - a.avgPoint);

  // Sắp xếp danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp
  const sortByAvgTraningPoint = [...eligibleStudents].sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);

  // Lấy thông tin của Ong vàng
  const goldMedalist = sortByAvgPoint[0];

  return (
    <View>
      <Text>Danh sách sinh viên theo điểm số từ cao xuống thấp:</Text>
      {sortByAvgPoint.map(student => (
        <Text key={student.mssv}>{student.name}: {student.avgPoint}</Text>
      ))}
      
      <Text>Danh sách sinh viên theo điểm rèn luyện từ cao xuống thấp:</Text>
      {sortByAvgTraningPoint.map(student => (
        <Text key={student.mssv}>{student.name}: {student.avgTraningPoint}</Text>
      ))}

      <Text>Thông tin của Ong vàng:</Text>
      <Text>Tên: {goldMedalist ? goldMedalist.name : ''}</Text>
      <Text>MSSV: {goldMedalist ? goldMedalist.mssv : ''}</Text>
      <Text>Điểm số: {goldMedalist ? goldMedalist.avgPoint : ''}</Text>
    </View>
  );
};

export default MainComponent;
