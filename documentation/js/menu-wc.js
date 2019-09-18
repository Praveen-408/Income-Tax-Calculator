'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">income-tax-calculator documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5b4384ba483542a0a589feb7491453b6"' : 'data-target="#xs-components-links-module-AppModule-5b4384ba483542a0a589feb7491453b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5b4384ba483542a0a589feb7491453b6"' :
                                            'id="xs-components-links-module-AppModule-5b4384ba483542a0a589feb7491453b6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ITCalculationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ITCalculationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AgricultaralCeilCategory.html" data-type="entity-link">AgricultaralCeilCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/AssessmentYear.html" data-type="entity-link">AssessmentYear</a>
                            </li>
                            <li class="link">
                                <a href="classes/CapitalGains.html" data-type="entity-link">CapitalGains</a>
                            </li>
                            <li class="link">
                                <a href="classes/CESS.html" data-type="entity-link">CESS</a>
                            </li>
                            <li class="link">
                                <a href="classes/Deduction.html" data-type="entity-link">Deduction</a>
                            </li>
                            <li class="link">
                                <a href="classes/Deduction80CCD1.html" data-type="entity-link">Deduction80CCD1</a>
                            </li>
                            <li class="link">
                                <a href="classes/Deduction80CCD2.html" data-type="entity-link">Deduction80CCD2</a>
                            </li>
                            <li class="link">
                                <a href="classes/Deduction80CCG.html" data-type="entity-link">Deduction80CCG</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionCalculator.html" data-type="entity-link">DeductionCalculator</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository.html" data-type="entity-link">DeductionRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20102011.html" data-type="entity-link">DeductionRepository20102011</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20112012.html" data-type="entity-link">DeductionRepository20112012</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20122013.html" data-type="entity-link">DeductionRepository20122013</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20132014.html" data-type="entity-link">DeductionRepository20132014</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20142015.html" data-type="entity-link">DeductionRepository20142015</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20152016.html" data-type="entity-link">DeductionRepository20152016</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20162017.html" data-type="entity-link">DeductionRepository20162017</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20172018.html" data-type="entity-link">DeductionRepository20172018</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20182019.html" data-type="entity-link">DeductionRepository20182019</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20192020.html" data-type="entity-link">DeductionRepository20192020</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeductionRepository20202021.html" data-type="entity-link">DeductionRepository20202021</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeFromCapitalGains.html" data-type="entity-link">IncomeFromCapitalGains</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeFromHouseProperty.html" data-type="entity-link">IncomeFromHouseProperty</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeFromOtherSources.html" data-type="entity-link">IncomeFromOtherSources</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository.html" data-type="entity-link">IncomeTaxRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20102011.html" data-type="entity-link">IncomeTaxRepository20102011</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20112012.html" data-type="entity-link">IncomeTaxRepository20112012</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20122013.html" data-type="entity-link">IncomeTaxRepository20122013</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20132014.html" data-type="entity-link">IncomeTaxRepository20132014</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20142015.html" data-type="entity-link">IncomeTaxRepository20142015</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20152016.html" data-type="entity-link">IncomeTaxRepository20152016</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20162017.html" data-type="entity-link">IncomeTaxRepository20162017</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20172018.html" data-type="entity-link">IncomeTaxRepository20172018</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20182019.html" data-type="entity-link">IncomeTaxRepository20182019</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20192020.html" data-type="entity-link">IncomeTaxRepository20192020</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeTaxRepository20202021.html" data-type="entity-link">IncomeTaxRepository20202021</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncomeType.html" data-type="entity-link">IncomeType</a>
                            </li>
                            <li class="link">
                                <a href="classes/IntersestOnTaxCalculator.html" data-type="entity-link">IntersestOnTaxCalculator</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentMonthly.html" data-type="entity-link">PaymentMonthly</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rebate.html" data-type="entity-link">Rebate</a>
                            </li>
                            <li class="link">
                                <a href="classes/SlabCategory.html" data-type="entity-link">SlabCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxCalculator.html" data-type="entity-link">TaxCalculator</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxLeftOverMonthly.html" data-type="entity-link">TaxLeftOverMonthly</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxSection.html" data-type="entity-link">TaxSection</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaxSlab.html" data-type="entity-link">TaxSlab</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});