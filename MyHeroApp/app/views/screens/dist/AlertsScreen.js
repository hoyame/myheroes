"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_1 = require("react-native");
var Themed_1 = require("../../core/components/Themed");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var Header_1 = require("../components/Header");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
var AlertScreen = function () {
    return (React.createElement(Themed_1.View, { style: styles.container },
        React.createElement(Header_1["default"], null),
        React.createElement(react_native_1.TouchableHighlight, { activeOpacity: 0.8, onPress: function () { return null; } },
            React.createElement(Themed_1.View, { style: {
                    height: 70,
                    width: 330,
                    backgroundColor: 'rgb(34, 34, 34)',
                    borderRadius: 5,
                    display: 'flex',
                    flexDirection: 'row'
                } },
                React.createElement(Themed_1.View, { style: {
                        height: 55,
                        width: 55,
                        margin: 7.5,
                        borderRadius: 50,
                        opacity: 0.60
                    } },
                    React.createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faExclamationCircle, size: 35, style: {
                            margin: 10,
                            color: '#fff'
                        } })),
                React.createElement(Themed_1.View, null,
                    React.createElement(Themed_1.Text, { style: {
                            fontSize: 20,
                            margin: 10
                        } }, "Alerte Rouge"),
                    React.createElement(Themed_1.Text, { style: {
                            fontSize: 20,
                            margin: 10
                        } }, "Alerte Rouge"))))));
};
exports["default"] = AlertScreen;
