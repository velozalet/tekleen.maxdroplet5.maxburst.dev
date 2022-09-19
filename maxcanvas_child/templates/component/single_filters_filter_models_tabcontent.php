<!--__filter_models_tab-->
<?php $filter_models_table_info = get_field('filter_models_table_info', get_the_ID()); //dd($filter_models_table_info);?>
<?php if($filter_models_table_info):?>
<div class="about-table__tab __filter_models_tab is-active" data-view="filter_models">
	<div id="sorting__select_metric_filter_models" class="sorting__select">
		<select class="js-select" data-placeholder="metric">
			<option value="metric">metric</option>
			<option value="imperial">imperial</option>
		</select>
	</div>
	<table class="about-table__table single-filter--filtermodels sortable">
		<thead>
		<tr style="background-color:#A2B900;">
			<th style="cursor:pointer;">Filter Model <br> <i class="fa fa-sort" style="font-size:16px"></i></th>
			<th style="cursor:pointer;">Flange Size <br> <span>(mm)</span> <i class="fa fa-sort" style="font-size:16px"></i></th>
			<th style="cursor:pointer;">Screen Area <br> <span>(m²)</span> <i class="fa fa-sort" style="font-size:16px"></i></th>
			<th style="cursor:pointer;">Max Flow <br> <span>(m³/h)</span> <i class="fa fa-sort" style="font-size:16px"></i></th>
			<th style="cursor:pointer;">Empty Weight <br> <span>(kgs)</span> <i class="fa fa-sort" style="font-size:16px"></i></th>
			<th class="no-sort" style="pointer-events:none;">Cut Sheet</th>
			<th class="no-sort" style="pointer-events:none;">Installation Layout</th>
		</tr>
		</thead>
		<tbody>
		<?php foreach( $filter_models_table_info as $arr):?>
			<tr>
				<?php foreach($arr as $info=>$value):?>
					<?php if( is_array($value) ):?>
						<td>
							<a class="doc-file-link" href="<?=$value["doc_1"]["url"];?>" target="_blank"><img src="<?=$value["doc_1"]["icon"];?>" alt="" style="width:14px;height:auto;margin-right:3px;"><?=strtoupper($value["doc_1"]["subtype"]);?></a>
							<?=( !$value["doc_1"]["url"] || !$value["doc_2"]["url"] ) ? '' : '|'?>
							<a class="doc-file-link" href="<?=$value["doc_2"]["url"];?>" target="_blank"><img src="<?=$value["doc_2"]["icon"];?>" alt="" style="width:14px; height:auto;margin-right:3px;"><?=( $value["doc_2"]["subtype"] == 'octet-stream' ) ? 'DWG': '';?></a>
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