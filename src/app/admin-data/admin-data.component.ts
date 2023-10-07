import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent {
  activeTab: string = 'financial';
  financialFormData: any = {};
  teamFormData: any = {};
  productFormData: any = {};
  financialFormSubmitted: boolean = false; // Track form submission
  teamFormSubmitted: boolean = false; // Track form submission
  productFormSubmitted: boolean = false; // Track form submission

  constructor() {}

  submitFinancialForm() {
    this.financialFormSubmitted = true; // Mark the form as submitted
    if (this.isValidFinancialForm()) {
      const theYearDataBeingSubmitted = this.financialFormData.year;
      alert(`Updating Finance for FY ${theYearDataBeingSubmitted} - WIP (Connect to S3)`);
      console.log('Financial Data submitted:', this.financialFormData);
      this.financialFormSubmitted = false; // Reset form submission status
    }
  }

  isValidFinancialForm(): boolean {
    const year = this.financialFormData.year;
    return year && year >= 1900 && year <= 2024;
  }

  submitTeamForm() {
    this.teamFormSubmitted = true; // Mark the form as submitted
    if (this.isValidTeamForm()) {
      // Handle form submission for Team Data here
      alert('Updating new Team Size - WIP (Connect to S3)');
      console.log('Team Data submitted:', this.teamFormData);
      this.teamFormSubmitted = false; // Reset form submission status
    }
  }

  isValidTeamForm(): boolean {
    // Add validation logic for Team Data here
    // For example, check if the number of employees and clients are valid
    return this.teamFormData.employees >= 0 && this.teamFormData.clients >= 0;
  }

  submitProductForm() {
    this.productFormSubmitted = true; // Mark the form as submitted
    if (this.isValidProductForm()) {
      // Handle form submission for Product Data here
      alert('Submitting Product User count to Backend - WIP (Connect to S3)');
      console.log('Product Data submitted:', this.productFormData);
      this.productFormSubmitted = false; // Reset form submission status
    }
  }

  isValidProductForm(): boolean {
    // Add validation logic for Product Data here
    // For example, check if the number of users is valid
    return this.productFormData.steamUsers >= 0 && this.productFormData.truprenuerUsers >= 0 &&
           this.productFormData.languageUsers >= 0 && this.productFormData.otherUsers >= 0;
  }
}
