<!--__filter_models_tab-->
<?php $filter_models_table_info = get_field('filter_models_table_info', get_the_ID());?>
<?php if($filter_models_table_info):?>
<div class="about-table__tab __filter_models_tab is-active" data-view="filter_models">
	<?php //dd($filter_models_table_info);?>
	<table class="about-table__table single-filter--filtermodels">
		<thead>
		<tr style="background-color:#A2B900;">
			<th>Filter Model</th>
			<th>Flange Size <span>(mm)</span></th>
			<th>Screen Area <span>(m²)</span></th>
			<th>Max Flow <span>(m³/h)</span></th>
			<th>Empty Weight <span>(kgs)</span></th>
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
						<td> <span><?=$value;?></span> </td>
					<?php endif;?>
				<?php endforeach;?>
			</tr>
		<?php endforeach;?>
		</tbody>
	</table>
</div>
<!--/__filter_models_tab-->
<?php endif;?>