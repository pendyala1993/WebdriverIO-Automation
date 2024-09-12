// import { expect } from '@wdio/globals'

class RetirementCalcPage{

    get currentAge(){
        return $('#current-age')
    }

    get retirementAge(){
        return $('#retirement-age')
    }

    get currentIncome(){
        return $('#current-income')
    }

    get spouceIncome(){
        return $('#spouse-income')
    }

    get currentTotalSavings(){
        return $('#current-total-savings')
    }

    get currentAnnualSavings(){
        return $('#current-annual-savings')
    }

    get savingsIncreaseRate(){
        return $('#savings-increase-rate')
    }

    get yesSocialSecurityLabel(){
        return $("//label[@for='yes-social-benefits']")
    }

    get yesSocialSecurityRadioBtn(){
        return $('input#yes-social-benefits')
    }

    get singleStatusLabel(){
        return $("//label[@for='single']")
    }

    get singleStatusRadioBtn(){
        return $('input#single')
    }

    get inputSocialSecurityIncome(){
        return $('#social-security-override')
    }

    get calculateSubmitBtn(){
        return $("button[data-tag-id='submit']")
    }

    get resultsChart(){
        return $('#results-chart')
    }

    get btnShowFullResults(){
        return $("button[onclick='showFullResults();']")
    }

    get linkAdjustDefaultValues(){
        return $("//a[text()='Adjust default values']")
    }

    get txtDefaultCalculatorValues(){
        return $("//div[@class='modal-body']//*[text()='Default calculator values']")
    }

    get inputAdditionaIncome(){
        return $('input#additional-income')
    }

    get inputRetirementDuration(){
        return $('input#retirement-duration')
    }

    get inputRetirementAnnualIncome(){
        return $('input#retirement-annual-income')
    }

    get btnSaveChangesToDefaultValues(){
        return $("//button[text()='Save changes']")
    }

}

export default new RetirementCalcPage();