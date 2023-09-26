function netSalaryCalculator(basicSalary, mpangoWaKandoAllowance, leavePay) {
    const grossSalary = basicSalary+mpangoWaKandoAllowance+leavePay;
    let nhif;
  
    switch(true) {
        case grossSalary > 0 && grossSalary <= 5999:
          nhif = 150;
          break;
        case grossSalary >= 6000 && grossSalary <= 7999:
          nhif = 300;
          break;
        case  grossSalary >= 8000 && grossSalary <= 11999:
          nhif = 400;
          break;
        default:
          nhif = 2000;
          break;
        case grossSalary >= 12000 && grossSalary <= 14999:
          nhif = 500;
          break;
        case grossSalary >= 15000 && grossSalary <= 19999:
          nhif = 600;
          break;
        case grossSalary >= 20000 && grossSalary <= 24999:
          nhif = 750;
          break;
        case grossSalary >= 25000 && grossSalary <= 29999:
          nhif = 850;
          break;
        case grossSalary >= 30000 && grossSalary <= 34999:
          nhif = 900;
          break;
        case grossSalary >= 35000 && grossSalary <= 39999:
          nhif = 950;
          break;
        case grossSalary >= 40000 && grossSalary <= 44999:
          nhif = 1000;
          break;
        case grossSalary >= 45000 && grossSalary <= 49999:
          nhif = 1100;
          break;
        case grossSalary >= 50000 && grossSalary <= 59999:
          nhif = 1200;
          break;
        case grossSalary >= 60000 && grossSalary <= 69999:
          nhif = 1300;
          break;
        case grossSalary >= 70000 && grossSalary <= 79999:
          nhif = 1400;
          break;
        case grossSalary >= 80000 && grossSalary <= 89999:
          nhif = 1500;
          break;
        case grossSalary >= 90000 && grossSalary <= 99999:
          nhif = 1600;
          break;
         case grossSalary > 100000:
          nhif = 1700;
          break;
        }
    
        const nssf = 12*(grossSalary/100);
        const deductions = nhif+nssf;
        const taxablePay = grossSalary - deductions;
  
        let paye;
  
        switch(true) {
            case taxablePay > 0 && taxablePay <= 24000:
              paye = (taxablePay/100)*10;
              break;
            case taxablePay > 24000 && taxablePay <= 32333:
              paye = (taxablePay/100)*25;
              break;
            case taxablePay > 32333 && taxablePay <= 500000:
              paye = (taxablePay/100)*30;
              break;     
            case taxablePay > 500000 && taxablePay <= 800000:
              paye = (taxablePay/100)*32.5;
              break;  
            case taxablePay > 800000:
              paye = (taxablePay/100*35);
              break;  
          }
  
        const totalDeductions = nhif + nssf + paye;
        const netPay = grossSalary - totalDeductions;
  
        return netPay;
  }
  console.log(netSalaryCalculator(basicSalary, mpangoWaKandoAllowance, leavePay));
  
  
  
  