import LoginPage from '../pageobjects/login.page.js'
import RetirementCalcFunctions from '../pageFunctions/retirementCalcFunctions.ts'
import testdata from '../resources/preprod_TestData.json';

describe('Validate Retirement Calculator', () => {
    it('should successfully calculate when user enters mandatory fields', async () => {
        await LoginPage.openApplication(testdata.retirementUri)
        await RetirementCalcFunctions.calculateWithMandatoryFields()
    })

    it('should successfully calculate when user enters all fields', async () => {
        await LoginPage.openApplication(testdata.retirementUri)
        await RetirementCalcFunctions.calculateWithAllFields()
    })

    it('should display Social Security fields with respect to Toggle selection', async () => {
        await LoginPage.openApplication(testdata.retirementUri)
        await RetirementCalcFunctions.validateSocialSecurityFieldsVisibility()
    })

    it('should validate changes to Default Calculator Values', async () => {
        await LoginPage.openApplication(testdata.retirementUri)
        await RetirementCalcFunctions.validateUpdateDefaultCalculatorValues()
    })


})

