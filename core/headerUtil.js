const headerUtil = () => {

    return {
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json",
            'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImllbTVQQXlWVXUxQ19uc1hfamJvRFZWZTA4ND0iLCJ0eXBlIjoyLCJncmFudFR5cGUiOjQsInJvbGVUeXBlIjoxLCJleHAiOjE1Njg3OTU1NjgsImlhdCI6MTU2ODc5NTI2OH0.lwo9ni9ddumtqqiquTovGvqV11jAwsiFmslVxGQ_6pBdiHM2Vx00ID1oX1f5Okib5Co-gz4S2e3LJLvyFLRsj3n0aZChHYTgiWSurcrsPa7z0MTMezYWhfoG8PCCxU-ajN95Q0MCKyTI9IV5voOIVWNELzGrRiCMIvTEOoXp8Xs'
        }
    };
};

export default headerUtil;