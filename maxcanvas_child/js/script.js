const cssElem = window.getComputedStyle( document.getElementById("breakpoint_check"), null );
let breakpointCheck = cssElem.getPropertyValue('width');

if( breakpointCheck === '767px' ){
	if( document.querySelectorAll('.wow--animate') ){
		document.querySelectorAll('.wow--animate').forEach(
			(item) => {
				item.classList.remove('wow'); item.style.visibility = 'visible';
			}
		);
	}
}

document.addEventListener( 'DOMContentLoaded', function () {
/*
    function eachElem(el) {
        var allElems = document.querySelectorAll(el);
        return allElemsArr = Array.prototype.slice.call(allElems);
    }
    function moveMenuItems(submenu, menuSubList, start, end) {
        for(i = end; i >= start; i--) {
            if (submenu.querySelector('li:nth-child(' + start + ')')) {
                //console.log(i);
                menuSubList.append(submenu.querySelector('li:nth-child(' + start + ')'));
            }
        }
    }
    function addMenuCol(submenu, start, end){
        var menuCol = document.createElement('div');
        menuCol.classList.add('menu__col');

        var menuSubList = document.createElement('ul');
        menuSubList.classList.add('menu__sub-list');

        moveMenuItems(submenu, menuSubList, start, end);

        menuCol.append(menuSubList);
        document.querySelector('.menu__grid').append(menuCol);
    }
    eachElem('.menu__sub-list').forEach(function(submenu){
        addMenuCol(submenu, 5, 10);
        // addMenuCol(submenu, 11, 20);
        // addMenuCol(submenu, 21, 30);
    });
*/

	/*New splitting menu items into columns*/
	if( document.querySelector('header.header') ){
		const menuMain = document.getElementById('menu-main-menu');
		if(menuMain){
			const __industrial = menuMain.querySelector('#menu-item-45'),
				  __irrigation = menuMain.querySelector('#menu-item-355'),
				  __filters = menuMain.querySelector('#menu-item-57');

			let __industrialMenuItemsCollection = __industrial.querySelectorAll('.menu__dropdown .menu__grid .menu__sub-list > li'); //11
			let __irrigationMenuItemsCollection = __irrigation.querySelectorAll('.menu__dropdown .menu__grid .menu__sub-list > li'); //3
			let __filtersMenuItemsCollection = __filters.querySelectorAll('.menu__dropdown .menu__grid .menu__sub-list > li'); //6

			let numberOfMenuItemsInOneColumn = 5, //number of menu items in one column
				howManyColumns = 1; //how many columns will

			//____________________________________________________________

			const insertHTML_beforeEnd = (element) => {
				element.insertAdjacentHTML('beforeEnd', `
					<div class="menu__col">
						<ul class="menu__sub-list"></ul>
					</div>
				`);
			}
			for( let i=0; i<3; i++ ){
				insertHTML_beforeEnd( __industrial.querySelector('.menu__dropdown > .menu__grid') );
				insertHTML_beforeEnd( __irrigation.querySelector('.menu__dropdown > .menu__grid') );
				insertHTML_beforeEnd( __filters.querySelector('.menu__dropdown > .menu__grid') );
			}

			//FOR "INDUSTRIAL"
			if(__industrialMenuItemsCollection){
				for( let item of  __industrialMenuItemsCollection){ item.remove(); }
				__industrialMenuCol1 = []; __industrialMenuCol2 = []; __industrialMenuCol3 = []; __industrialMenuCol4 = [];
				__industrialMenuItemsCollection.forEach(
					(item, index, collection) => {
						if( (index+1) > 0 && (index+1) < (numberOfMenuItemsInOneColumn +1) ){ __industrialMenuCol1.push(item); }
						if( (index+1) > numberOfMenuItemsInOneColumn && (index+1) < (numberOfMenuItemsInOneColumn * 2) + 1 ){ __industrialMenuCol2.push(item); }
						if( (index+1) > (numberOfMenuItemsInOneColumn * 2) && (index+1) < (numberOfMenuItemsInOneColumn * 3) + 2 ){ __industrialMenuCol3.push(item); }
						if( (index+1) > (numberOfMenuItemsInOneColumn * 3) + 1 ){ __industrialMenuCol4.push(item); }
					}
				); //console.log(__industrialMenuCol1); console.log(__industrialMenuCol2); console.log(__industrialMenuCol3); console.log(__industrialMenuCol4);

				if( __industrialMenuCol1.length ){
					for( let itemMenu of __industrialMenuCol1 ){
						__industrial.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(1) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
					}
				}
				if( __industrialMenuCol2.length ){
					for( let itemMenu of __industrialMenuCol2 ){
						__industrial.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(2) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
					}
				}
				if( __industrialMenuCol3.length ){
					for( let itemMenu of __industrialMenuCol3 ){
						__industrial.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(3) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
					}
				}
				if( __industrialMenuCol4.length ){
					for( let itemMenu of __industrialMenuCol4 ){
						__industrial.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(4) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
					}
				}
			}

			//FOR "IRRIGATION"
			if(__irrigationMenuItemsCollection){
				for( let item of  __irrigationMenuItemsCollection){ item.remove(); }
				__irrigationMenuCol1 = []; __irrigationMenuCol2 = []; __irrigationMenuCol3 = []; __irrigationMenuCol4 = [];
			}
			__irrigationMenuItemsCollection.forEach(
				(item, index, collection) => {
					if( (index+1) > 0 && (index+1) < (numberOfMenuItemsInOneColumn +1) ){ __irrigationMenuCol1.push(item); }
					if( (index+1) > numberOfMenuItemsInOneColumn && (index+1) < (numberOfMenuItemsInOneColumn * 2) + 1 ){ __irrigationMenuCol2.push(item); }
					if( (index+1) > (numberOfMenuItemsInOneColumn * 2) && (index+1) < (numberOfMenuItemsInOneColumn * 3) + 2 ){ __irrigationMenuCol3.push(item); }
					if( (index+1) > (numberOfMenuItemsInOneColumn * 3) + 1 ){ __irrigationMenuCol4.push(item); }
				}
			); //console.log(__irrigationMenuCol1); console.log(__irrigationMenuCol2); console.log(__irrigationMenuCol3); console.log(__irrigationMenuCol4);

			if( __irrigationMenuCol1.length ){
				for( let itemMenu of __irrigationMenuCol1 ){
					__irrigation.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(1) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
				}
			}
			if( __irrigationMenuCol2.length ){
				for( let itemMenu of __irrigationMenuCol2 ){
					__irrigation.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(2) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
				}
			}
			if( __irrigationMenuCol3.length ){
				for( let itemMenu of __irrigationMenuCol3 ){
					__irrigation.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(3) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
				}
			}
			if( __irrigationMenuCol4.length ){
				for( let itemMenu of __irrigationMenuCol4 ){
					__irrigation.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(4) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
				}
			}

			//FOR "FILTERS"
			if(__filtersMenuItemsCollection){
				for( let item of  __filtersMenuItemsCollection){ item.remove(); }
				__filtersMenuCol1 = []; __filtersMenuCol2 = []; __filtersMenuCol3 = []; __filtersMenuCol4 = [];
			}
			__filtersMenuItemsCollection.forEach(
				(item, index, collection) => {
					if( (index+1) > 0 && (index+1) < (numberOfMenuItemsInOneColumn +1) ){ __filtersMenuCol1.push(item); }
					if( (index+1) > numberOfMenuItemsInOneColumn && (index+1) < (numberOfMenuItemsInOneColumn * 2) + 1 ){ __filtersMenuCol2.push(item); }
					if( (index+1) > (numberOfMenuItemsInOneColumn * 2) && (index+1) < (numberOfMenuItemsInOneColumn * 3) + 2 ){ __filtersMenuCol3.push(item); }
					if( (index+1) > (numberOfMenuItemsInOneColumn * 3) + 1 ){ __filtersMenuCol4.push(item); }
				}
			); //console.log(__filtersMenuCol1); console.log(__filtersMenuCol2); console.log(__filtersMenuCol3); console.log(__filtersMenuCol4);

			if( __filtersMenuCol1.length ){
				for( let itemMenu of __filtersMenuCol1 ){
					__filters.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(1) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
				}
			}
			if( __filtersMenuCol2.length ){
				for( let itemMenu of __filtersMenuCol2 ){
					__filters.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(2) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
				}
			}
			if( __filtersMenuCol3.length ){
				for( let itemMenu of __filtersMenuCol3 ){
					__filters.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(3) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
				}
			}
			if( __filtersMenuCol4.length ){
				for( let itemMenu of __filtersMenuCol4 ){
					__filters.querySelector('.menu__dropdown > .menu__grid .menu__col:nth-of-type(4) .menu__sub-list').insertAdjacentElement('beforeEnd',itemMenu);
				}
			}


			/*For Mobile Menu. Click on subItems Menu*/
			let MENU = document.getElementById('menu-main-menu');
			let iMenuCollection = MENU.querySelectorAll('.menu__dropdown .menu__col .menu__sub-list > li.menu-item'); //console.log(iMenuCollection);
			iMenuCollection.forEach(
				(item, index, collection) => {
					item.addEventListener('click', (event) => { //event.currentTarget
						location.href = event.currentTarget.querySelector('a.menu__link').getAttribute('href');
					});
				}
			);
			/*__/For Mobile Menu. Click on subItems Menu*/

		} //__/if(menuMain)


	}
	/*__/New splitting menu items into columns*/
    //__________________________________________________________________________________________________________________

	/*__________________________________________Announcements Page*/
	if( document.querySelector('body.page-template-announcements') ) {
		const sortingViewsDOM = document.querySelector('body.page-template-announcements .sorting__views'),
			  sortingViewList = sortingViewsDOM.querySelector('.sorting__view.sorting__view--list'),
			  sortingViewGrid = sortingViewsDOM.querySelector('.sorting__view.sorting__view--grid');
			  sortingViewsDOM_collection = sortingViewsDOM.querySelectorAll('.sorting__view'); //icons 'List' and 'Grid'

			const announcementsPostsGrid = document.querySelector('body.page-template-announcements #announcements_posts_grid'),
				  announcementsPostsList = document.querySelector('body.page-template-announcements #announcements_posts_list');

		let submit_upcoming_events_form = document.getElementById('submit_upcoming_events_form'),
			reset_upcoming_events_form = document.getElementById('reset_upcoming_events_form');

		let eventDateSelect = document.getElementById('date_select'); //DATE SORTING
		if (eventDateSelect) {
			eventDateSelect.onchange = function (event) {
				submit_upcoming_events_form.click();
			}
		}
		let eventTypeSelect = document.getElementById('event_type__select'); //TYPE EVENT SORTING
		if (eventTypeSelect) {
			document.getElementById('event_type__select').onchange = function (event) {
				submit_upcoming_events_form.click();
			}
		}
		if (reset_upcoming_events_form) {
			reset_upcoming_events_form.onclick = function (event) {
				location.href = `${globalData.siteURL}/announcements/`;
			}
		}

		/**Clicks to icons toggle display posts: List - Grid */
		function swithtDisplay(event) {
			 for( let item of sortingViewsDOM_collection ){
				 if( item.classList.contains('is-active') ){ item.classList.remove('is-active'); }
			 }
			event.currentTarget.classList.add('is-active');

			if( event.currentTarget.getAttribute('data-view') === 'list' ){
				announcementsPostsGrid.classList.add('display-none');
				announcementsPostsList.classList.remove('display-none');
			}else{
				announcementsPostsGrid.classList.remove('display-none');
				announcementsPostsList.classList.add('display-none');
			}
		}
		sortingViewList.addEventListener("click", swithtDisplay);
		sortingViewGrid.addEventListener("click", swithtDisplay);
		/**Clicks to icons toggle display posts: List - Grid */

		document.querySelector('main.main').scrollIntoView({behavior: "smooth"});
	}
	/**__/Filterig content "Trade Shows" Posts*/
	/*__________________________________________/Announcements Page*/



	/*__________________________________________/resource-center-2 Page - Archive "Case Studies"*/
	const caseStudiesArchiveDOM = document.getElementById('case_studies_archive');
	if(caseStudiesArchiveDOM){
		const caseStudiesContainerDOM = document.getElementById('container_archive_caseStudies'), //Main container with all posts of "Case Studies" CPT
			  postsCaseStudiesCollection = caseStudiesContainerDOM.querySelectorAll('._posts_case_studies'), //All Post Collection
			  filterListCategories = caseStudiesArchiveDOM.querySelector('ul.filter__list'); //Container DOM with all Tabs of categories of "Case Studies" CPT
			  filterListCatCollection = filterListCategories.querySelectorAll('li.filter__item'), // Collection Tabs of categories of "Case Studies" CPT
			  filterItemDefaultTab = filterListCategories.querySelector('li.filter__item.filter__item--default-tab'), //Tab "All Posts"
			  filterInputCaseStudies = document.getElementById('filter__input_caseStudies'); //Input Search

		//let idPostsCollection = []; //For Ids of Posts
		//______________________________________________________________________________________________________________

		/** Сheck if the category ID is repeated,then we hide such a post*/
		function hideRepeatPostInBaseCollection(){
			let idPostsCollection = [];
			postsCaseStudiesCollection.forEach(
				(postCaseStudiesItem, index, collection) => { //console.log(postCaseStudiesItem.getAttribute('data-post_id'));
					if( idPostsCollection.includes( postCaseStudiesItem.getAttribute('data-post_id') ) ){ //Сheck if the category ID is repeated,then we hide such a post
						postCaseStudiesItem.classList.add('display-none');
					}
					idPostsCollection.push( postCaseStudiesItem.getAttribute('data-post_id') );
				}
			);
			idPostsCollection = [];
		}
		hideRepeatPostInBaseCollection();

		/**__/Сheck if the category ID is repeated,then we hide such a post*/

		/** Clicks on tabs of Categories of "Case Studies" CPT*/
		filterListCatCollection.forEach(
			(item, index, collection) => {
				item.addEventListener("click", (event) => { //console.log(event.currentTarget);
					let dataIdCat = event.currentTarget.getAttribute('data-id'); //console.log(dataIdCat);
					for(let tabFilter of collection){ tabFilter.classList.remove('is-active') }
					item.classList.add('is-active');

					if(dataIdCat !== 'all'){ filterItemDefaultTab.classList.remove('display-none'); } //When any tab is clicked except "All posts",- whow "All posts" tab
					if(dataIdCat == 'all'){
						item.classList.add('display-none'); //When "All posts" tab is clicked,- hidden "All posts" tab
						hideRepeatPostInBaseCollection(); //Resuming the base collection of posts without repeating posts
					}

					if(dataIdCat !== 'all'){
						for( let postCaseStudiesItem of postsCaseStudiesCollection ){
							postCaseStudiesItem.classList.remove('display-none');
							if( dataIdCat !== postCaseStudiesItem.getAttribute('data-category') ){
								postCaseStudiesItem.classList.add('display-none');
							}
						}
					}else{
						for( let postCaseStudiesItem of postsCaseStudiesCollection ){
							postCaseStudiesItem.classList.remove('display-none');
						}
						hideRepeatPostInBaseCollection(); //Resuming the base collection of posts without repeating posts
					}

				});
			}
		);
		/**__/Clicks on tabs of Categories of "Case Studies" CPT*/

		/** Fitter of Posts
		 * @param collection (array) - collection of posts to be searched
		 * @param elementSelectorContent (string) - the selector of the element that contains the post content
		 * @returns {Function}
		 */
		function filterPosts(collection, elementSelectorContent){
			return function(event) {
				let inputValue = event.currentTarget.value.toUpperCase(); //console.log(inputValue);
				for( i=0; i < collection.length; i++ ){
					let summary = collection[i].querySelectorAll('.summary')[0]; //console.log(summary.innerHTML);

					if( summary.innerHTML.toUpperCase().indexOf(inputValue) > -1 ){ collection[i].style.display = "block"; }
					else { collection[i].style.display = "none"; }
				}
			}
		}
		filterInputCaseStudies.addEventListener( "keyup", filterPosts(postsCaseStudiesCollection, '.summary') );
	}
	/*__________________________________________/resource-center-2 Page - Archive "Case Studies"*/


	/*__________________________________________/"Single Filter" Page*/
	if( document.querySelector('body.single-filters') ){
		var singleFiltersPage = document.querySelector('body.single-filters');
		var tabsListCollection = singleFiltersPage.querySelectorAll('.about-table__list.filters-tabs-list > li');
		var viewListCollection = singleFiltersPage.querySelectorAll('.filters-view-list .about-table__tab'); console.log(viewListCollection.length);

		var sortingSelectMetricFilterModels = document.getElementById('sorting__select_metric_filter_models');
		var sortingSelectDocumenttypeFilterModels = document.getElementById('sorting__select_documenttype_filter_models');
		var inputSearchByDocumentTitle = singleFiltersPage.querySelector('.__filter_documentation_tab input[type="text"]');

		var tableFilterModels = singleFiltersPage.querySelector('.__filter_models_tab > table');
		if( tableFilterModels ) {
			var flangeSizeTableHeader = tableFilterModels.querySelector('thead th:nth-of-type(2) span');
			var screenAreaTableHeader = tableFilterModels.querySelector('thead th:nth-of-type(3) span');
			var maxFlowTableHeader = tableFilterModels.querySelector('thead th:nth-of-type(4) span');
			var emptyWeightTableHeader = tableFilterModels.querySelector('thead th:nth-of-type(5) span');

			var tableLength = tableFilterModels.querySelectorAll('tbody > tr ').length;
			var flangeSizeValueCollection__m = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(2) span:first-of-type'),
				flangeSizeValueCollection__i = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(2) span:last-of-type');
			var screenAreaValueCollection__m = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(3) span:first-of-type'),
				screenAreaValueCollection__i = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(3) span:last-of-type');
			var maxFlowValueCollection__m = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(4) span:first-of-type'),
				maxFlowValueCollection__i = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(4) span:last-of-type');
			var emptyWeightValueCollection__m = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(5) span:first-of-type'),
				emptyWeightValueCollection__i = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(5) span:last-of-type');
		}

		var tableDocumentation = singleFiltersPage.querySelector('.__filter_documentation_tab  > table');
		if( tableDocumentation ){
			var tableDocumentationLength = tableDocumentation.querySelectorAll('tbody > tr ').length;
			var documentTitlesCollection = tableDocumentation.querySelectorAll('tbody > tr td:nth-of-type(2)');
			var documentTypeCollection = tableDocumentation.querySelectorAll('tbody > tr td:nth-of-type(3)');
		}

		const unitsMeasurement = {
			metric: {
				mm: '(mm)',
				m2: '(m²)',
				m3h: '(m³/h)',
				kgs: '(kgs)',
			},
			imperial: {
				inn: '(in)',
				sqft: '(sq ft)',
				gpm: '(gpm)',
				lbs: '(lbs)',
			}
		};

		//______________________________________________________________________________________________________________
		/**Clicks on tabs of tabular data*/
		tabsListCollection.forEach(
			(tabItem, index, collection) => {
				tabItem.addEventListener("click", swithtDisplayTables);
			}
		);

		function swithtDisplayTables(event){
			let currentTabClicked = event.currentTarget.getAttribute('data-view');
			switch( currentTabClicked ){
				case 'filter_models':
					for( let tab of tabsListCollection ){ tab.classList.remove('is-active'); }
					event.currentTarget.classList.add('is-active');

					for( let view of viewListCollection ){
						view.classList.remove('is-active');
						if( view.getAttribute('data-view') === currentTabClicked ){
							view.classList.add('is-active');
						}
					}
					break;
				case 'documentation':
					for( let tab of tabsListCollection ){ tab.classList.remove('is-active'); }
					event.currentTarget.classList.add('is-active');

					for( let view of viewListCollection ){
						view.classList.remove('is-active');
						if( view.getAttribute('data-view') === currentTabClicked ){
							view.classList.add('is-active');
						}
					}
					break;
				case 'spare_parts':
					for( let tab of tabsListCollection ){ tab.classList.remove('is-active'); }
					event.currentTarget.classList.add('is-active');

					for( let view of viewListCollection ){
						view.classList.remove('is-active');
						if( view.getAttribute('data-view') === currentTabClicked ){
							view.classList.add('is-active');
						}
					}
					break;
				case 'troubleshooting':
					for( let tab of tabsListCollection ){ tab.classList.remove('is-active'); }
					event.currentTarget.classList.add('is-active');

					for( let view of viewListCollection ){
						view.classList.remove('is-active');
						if( view.getAttribute('data-view') === currentTabClicked ){
							view.classList.add('is-active');
						}
					}
					break;
				default://'filter_models';
			}
		}
		/**Clicks on tabs of tabular data*/


		/** Click select metric/imperal for "Filter Models" Table */
		if(tableFilterModels){
			for( let item of flangeSizeValueCollection__i ){ item.innerHTML = Math.round( (+item.textContent / 25.4).toFixed(2) ).toFixed(1); } //convert mm --> in
			for( let item of screenAreaValueCollection__i ){ item.innerHTML = Math.round( (+item.textContent * 10.764).toFixed(2) ).toFixed(1); } //convert m² --> sqft
			for( let item of maxFlowValueCollection__i ){ item.innerHTML = Math.round( (+item.textContent / 4.4029).toFixed(2) ).toFixed(1); } //convert m³/h --> gpm
			for( let item of emptyWeightValueCollection__i ){ item.innerHTML = Math.round( (+item.textContent * 2.205).toFixed(2) ).toFixed(1); } //convert kgs --> lbs

			sortingSelectMetricFilterModels.onchange = function (event) { //console.log(event.currentTarget.value);
				/*METRIC*/
				if( event.currentTarget.value === 'metric' ){
					flangeSizeTableHeader.innerHTML = unitsMeasurement.metric.mm;
					screenAreaTableHeader.innerHTML = unitsMeasurement.metric.m2;
					maxFlowTableHeader.innerHTML = unitsMeasurement.metric.m3h;
					emptyWeightTableHeader.innerHTML = unitsMeasurement.metric.kgs;

					for( i=0; i < tableLength; ++i ){
						flangeSizeValueCollection__i[i].classList.add('display-none');
						screenAreaValueCollection__i[i].classList.add('display-none');
						maxFlowValueCollection__i[i].classList.add('display-none');
						emptyWeightValueCollection__i[i].classList.add('display-none');

						flangeSizeValueCollection__m[i].classList.remove('display-none');
						screenAreaValueCollection__m[i].classList.remove('display-none');
						maxFlowValueCollection__m[i].classList.remove('display-none');
						emptyWeightValueCollection__m[i].classList.remove('display-none');
					}

				}
				/*EMPERIAL*/
				else{
					flangeSizeTableHeader.innerHTML = unitsMeasurement.imperial.inn;
					screenAreaTableHeader.innerHTML = unitsMeasurement.imperial.sqft;
					maxFlowTableHeader.innerHTML = unitsMeasurement.imperial.gpm;
					emptyWeightTableHeader.innerHTML = unitsMeasurement.imperial.lbs;

					for( i=0; i < tableLength; ++i ){
						flangeSizeValueCollection__m[i].classList.add('display-none');
						screenAreaValueCollection__m[i].classList.add('display-none');
						maxFlowValueCollection__m[i].classList.add('display-none');
						emptyWeightValueCollection__m[i].classList.add('display-none');

						flangeSizeValueCollection__i[i].classList.remove('display-none');
						screenAreaValueCollection__i[i].classList.remove('display-none');
						maxFlowValueCollection__i[i].classList.remove('display-none');
						emptyWeightValueCollection__i[i].classList.remove('display-none');
					}
				}
			}
			/**__/Click select metric/imperal for "Filter Models" Table */
		}


		/** Searching by document title for "Filter Documentation" Table */
		function titleSearch(collection){
			return function(event) {
				let inputValue = event.currentTarget.value.toUpperCase();
				for( i=0; i < collection.length; i++ ){
					let summary = collection[i];
					if( summary.innerHTML.toUpperCase().replace('&AMP;','&').indexOf(inputValue) > -1 ){ collection[i].parentElement.classList.remove('display-none') }
					else { collection[i].parentElement.classList.add('display-none') }
				}
			}
		}
		if(tableDocumentation){
			if(inputSearchByDocumentTitle){ inputSearchByDocumentTitle.addEventListener( "keyup", titleSearch(documentTitlesCollection) ); }
		}
		/**__/Searching by document title for "Filter Documentation" Table */

		/** Select from dropdown for filtering by Document type*/
		if(tableDocumentation){
			sortingSelectDocumenttypeFilterModels.onchange = function(event){
				let currentValue = event.currentTarget.value.toUpperCase();

				for( let item of documentTypeCollection ){
					if( currentValue !== 'ALL DOCUMENTS' ){
						if( item.textContent.toUpperCase().trim() === currentValue ){
							item.parentElement.classList.remove('display-none');
						}else{
							item.parentElement.classList.add('display-none');
						}
					}else{
						item.parentElement.classList.remove('display-none');
					}
				}
			}
		}
		/** Select from dropdown for filtering by Document type */
	}
	/*__________________________________________/Single Filter" Page*/

});
