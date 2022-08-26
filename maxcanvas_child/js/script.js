document.addEventListener( 'DOMContentLoaded', function () {

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
        addMenuCol(submenu, 6, 10);
        addMenuCol(submenu, 11, 15);
        addMenuCol(submenu, 16, 20);
    });
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
		const singleFiltersPage = document.querySelector('body.single-filters');
		const tabsListCollection = singleFiltersPage.querySelectorAll('.about-table__list.filters-tabs-list > li');
		const viewListCollection = singleFiltersPage.querySelectorAll('.filters-view-list .about-table__tab');

		const sortingSelectMetricFilterModels = document.getElementById('sorting__select_metric_filter_models');
		const tableFilterModels = singleFiltersPage.querySelector('.__filter_models_tab > table');
		const flangeSizeTableHeader = tableFilterModels.querySelector('thead th:nth-of-type(2) span');
		const screenAreaTableHeader = tableFilterModels.querySelector('thead th:nth-of-type(3) span');
		const maxFlowTableHeader = tableFilterModels.querySelector('thead th:nth-of-type(4) span');
		const emptyWeightTableHeader = tableFilterModels.querySelector('thead th:nth-of-type(5) span');

		const tableLength = tableFilterModels.querySelectorAll('tbody > tr ').length;
		const flangeSizeValueCollection__m = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(2) span:first-of-type'),
			  flangeSizeValueCollection__i = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(2) span:last-of-type');
		const screenAreaValueCollection__m = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(3) span:first-of-type'),
			  screenAreaValueCollection__i = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(3) span:last-of-type');
		const maxFlowValueCollection__m = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(4) span:first-of-type'),
		 	  maxFlowValueCollection__i = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(4) span:last-of-type');
		const emptyWeightValueCollection__m = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(5) span:first-of-type'),
		      emptyWeightValueCollection__i = tableFilterModels.querySelectorAll('tbody > tr td:nth-of-type(5) span:last-of-type');

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
		}; console.log(unitsMeasurement);


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
	/*__________________________________________/Single Filter" Page*/
});