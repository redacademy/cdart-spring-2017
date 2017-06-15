import { StyleSheet } from 'react-native';
import { colors, typography } from './../../config/styles';

export const styles = StyleSheet.create({
    listItem: {
        backgroundColor: colors.textBackgroundGrey,
        marginBottom: 6,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    listItemTitle: {
        color: colors.blue,
        fontSize: typography.baseSize,
        marginBottom: 2,
    }
});
