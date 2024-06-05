import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        color: 'black'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Testing Testing 123</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

const PDFsheet = () => (
    <PDFViewer>
        <MyDocument />
    </PDFViewer>
);

export default PDFsheet;