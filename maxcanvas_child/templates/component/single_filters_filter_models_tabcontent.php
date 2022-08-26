<!--__filter_models_tab-->
<?php $filter_models_table_info = get_field('filter_models_table_info', get_the_ID());?>
<?php if($filter_models_table_info):?>

<div class="about-table__tab __filter_models_tab is-active" data-view="filter_models">
	<div id="sorting__select_metric_filter_models" class="sorting__select">
		<select class="js-select" data-placeholder="metric">
			<option value="metric">metric</option>
			<option value="imperial">imperial</option>
		</select>
	</div>
	<table class="about-table__table single-filter--filtermodels">
		<thead>
		<tr style="background-color:#A2B900;">
			<th>Filter Model</th>
			<th>Flange Size <br> <span>(mm)</span></th>
			<th>Screen Area <br> <span>(m²)</span></th>
			<th>Max Flow <br> <span>(m³/h)</span></th>
			<th>Empty Weight <br> <span>(kgs)</span></th>
			<th>Cut Sheet</th>
			<th>Installation Layout</th>
		</tr>
		</thead>
		<tbody>
		<?php foreach( $filter_models_table_info as $arr):?>
			<tr>
				<?php foreach($arr as $info=>$value):?>
					<?php if( is_array($value) ):?>
						<td>
							<a class="doc-file-link" href="<?=$value["doc_1"]["url"];?>" target="_blank"><?=$value["doc_1"]["title"];?></a>
							<?=( !$value["doc_1"]["url"] || !$value["doc_2"]["url"] ) ? '' : '|'?>
							<a class="doc-file-link" href="<?=$value["doc_2"]["url"];?>" target="_blank"><?=$value["doc_2"]["title"];?></a>
						</td>
					<?php else:?>
						<td> <span><?=$value;?></span> <span class="display-none"><?=$value;?></span> </td>
					<?php endif;?>
				<?php endforeach;?>
			</tr>
		<?php endforeach;?>
		</tbody>
	</table>
</div>
<!--/__filter_models_tab-->
<?php endif;?>