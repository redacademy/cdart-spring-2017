import { StyleSheet } from 'react-native';
import { colors, typography } from './../../../config/styles';

export const styles = StyleSheet.create({
    listItem: {
        backgroundColor: colors.lightGrey,
        marginBottom: 6,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    listItemTitle: {
        color: colors.blue,
        fontSize: 15,
        marginBottom: 2,
        fontFamily: typography.fontMainSemiBold,
    },
    listItemBullet: {
        fontFamily: typography.fontMain,
    }
});
