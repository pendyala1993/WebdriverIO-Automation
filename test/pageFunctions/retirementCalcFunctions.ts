import retirementCalculatorPage from '../pageobjects/retirementCalculator.page.ts';
import RetirementCalcPage from '../pageobjects/retirementCalculator.page.ts'
import testdata from '../resources/preprod_TestData.json';

class RetirementCalcFunctions{

    async inputMandatoryFields(){
        await RetirementCalcPage.currentAge.setValue(testdata.retirementData.currentAge)
        await RetirementCalcPage.retirementAge.setValue(testdata.retirementData.retirementAge)
        await RetirementCalcPage.currentIncome.click()
        await RetirementCalcPage.currentIncome.setValue(testdata.retirementData.currentAnnualIncome)
        await RetirementCalcPage.currentTotalSavings.click()
        await RetirementCalcPage.currentTotalSavings.setValue(testdata.retirementData.currentRetirementSavings)
        await RetirementCalcPage.currentAnnualSavings.setValue(testdata.retirementData.currentRetirementContribution)
        await RetirementCalcPage.savingsIncreaseRate.setValue(testdata.retirementData.AnnualRetirementContributionIncrease)
    }

    async calculateWithMandatoryFields(){
        await this.inputMandatoryFields()
        await RetirementCalcPage.calculateSubmitBtn.click()
        await browser.pause(5000)
        await expect(RetirementCalcPage.resultsChart).toBeExisting()
        await expect(RetirementCalcPage.btnShowFullResults).toHaveText(expect.stringMatching('See full results'))
    }

    async calculateWithAllFields(){
        await this.inputMandatoryFields()
        await RetirementCalcPage.spouceIncome.click()
        await RetirementCalcPage.spouceIncome.setValue(testdata.retirementData.currentAnnualIncome)
        await RetirementCalcPage.yesSocialSecurityLabel.click()
        await expect(RetirementCalcPage.yesSocialSecurityRadioBtn).toBeSelected()
        await RetirementCalcPage.inputSocialSecurityIncome.click()
        await RetirementCalcPage.inputSocialSecurityIncome.setValue(testdata.retirementData.socialSecurityOverride)
        await RetirementCalcPage.calculateSubmitBtn.click()
        await browser.pause(5000)
        await expect(RetirementCalcPage.resultsChart).toBeExisting()
        await expect(RetirementCalcPage.btnShowFullResults).toHaveText(expect.stringMatching('See full results'))
    }

    async validateSocialSecurityFieldsVisibility(){
        await expect(RetirementCalcPage.singleStatusRadioBtn).not.toBeDisplayed()
        await expect(RetirementCalcPage.inputSocialSecurityIncome).not.toBeDisplayed()
        await RetirementCalcPage.yesSocialSecurityLabel.click()
        await expect(RetirementCalcPage.yesSocialSecurityRadioBtn).toBeSelected()
        await expect(RetirementCalcPage.singleStatusRadioBtn).toBeDisplayed()
        await expect(RetirementCalcPage.inputSocialSecurityIncome).toBeDisplayed()
    }

    async validateUpdateDefaultCalculatorValues(){
        await RetirementCalcPage.linkAdjustDefaultValues.click()
        await RetirementCalcPage.txtDefaultCalculatorValues.waitForDisplayed()
        await RetirementCalcPage.inputAdditionaIncome.click()
        await RetirementCalcPage.inputAdditionaIncome.setValue(testdata.retirementData.additionalIncome)
        await RetirementCalcPage.inputRetirementDuration.setValue(testdata.retirementData.retirementPeriod)
        await RetirementCalcPage.inputRetirementAnnualIncome.setValue(testdata.retirementData.percentageOfFinalAnnualIncome)
        await RetirementCalcPage.btnSaveChangesToDefaultValues.click()
        await expect(RetirementCalcPage.txtDefaultCalculatorValues).not.toBeDisplayed()
        await browser.pause(5000)
        
    }
}

export default new RetirementCalcFunctions();