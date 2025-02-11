import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Intro2 = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../Assets/Images/Backgroud_Intro3.png')} // Đường dẫn tới hình ảnh bạn muốn làm background
                style={styles.backgroundImage} // Style cho background
            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Let us help you design the perfect wedding atmosphere.</Text>
                    
                </View>
                <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => {
                            console.log('Button Pressed');
                            // Thêm logic xử lý khi nhấn nút tại đây
                        }}
                    >
                        <Text style={styles.buttonText}>Join Us Today</Text>
                    </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default Intro2

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,  // Đảm bảo ImageBackground chiếm toàn bộ không gian của View
        justifyContent: 'center', // Canh giữa nội dung trong ImageBackground
        alignItems: 'center', // Canh giữa nội dung trong ImageBackground
    },
    textContainer: {
        width: '55%',
        position: 'absolute',
        top: 430,
        alignItems: 'center', // Căn giữa nội dung bên trong View
    },
    text: {
        color: '#fff', // Màu chữ trắng trên nền ảnh
        fontSize: 30,
    },
    buttonContainer: {
        position: 'absolute', 
        top: 630, 
        width: '75%', 
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Nền đen nhẹ, trong suốt
        borderColor: 'black', // Màu viền nút
        borderRadius: 25, // Bo góc của nút
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        position:'absolute',
        top: 630
    },
    buttonText: {
        color: '#fff', // Màu chữ trên nút
        fontSize: 18,
        textAlign: 'center',
    },
})
