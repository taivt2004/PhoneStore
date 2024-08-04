import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeQuantity, removeItem } from './Slice';

export function Counter() {
    const cart = useSelector((state) => {
        console.log(state);
        return state.counter.cart;
    });
    const dispatch = useDispatch();

    const onChangeItem = (id, quantity) => {
        if(!id){
            dispatch(changeQuantity({
                id: 2,
                name: 'san pham 2',
                price: 4000,
                quantity: 5
            }));
        }else{
            dispatch(changeQuantity({
                id: id,
                quantity: quantity
            }))
        }
       
    };

    return (
        <View>
            {cart.map(item => (
                <View key={item.id}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.quantity}</Text>
                    <Button title='+' onPress={() => onChangeItem(item.id, 1)} />
                    <Button title='-' onPress={() => onChangeItem(item.id, -1)} />
                    <Button title='Xóa' onPress={() => dispatch(removeItem(item.id))} />
                </View>
            ))}
            {
                cart.length === 0 && <Text>Khong co sp nao</Text>
            }
            {
                cart.length > 0 && <Text>Tong tien: {
                    cart.reduce((sum, item) =>
                        sum + item.price * item.quantity, 0)}</Text>
            }
            <Button title='Thêm' onPress={() => onChangeItem()} />
        </View>
    );
}

export default Counter;

const styles = StyleSheet.create({});
