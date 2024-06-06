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

const sectionMaker = (sections) => {
    // const sections = [1, 2, 3, 4];
    const output = [];
    for (let i = 0; i <= sections.length; i++) {
        output.push(
            <View style={styles.section}>
                <Text>{sections[i]}</Text>
            </View>
        );
    }
    return output;
}


// Create Document Component
const MyDocument = ({ sections }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {sectionMaker(sections)}

        </Page>
    </Document>
);

const PDFsheet = ({ sections }) => (
    <PDFViewer>
        <MyDocument sections={sections} />
    </PDFViewer>
);

export default PDFsheet;