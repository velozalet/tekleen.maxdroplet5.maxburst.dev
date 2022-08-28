<?php $documentation_table_info = get_field('documentation_info', get_the_ID());?>
<?php if($documentation_table_info):?>
<!--__filter_documentation_tab-->
<div class="about-table__tab __filter_documentation_tab" data-view="documentation">
	<?php //dd($documentation_table_info);?>
	<div>
		<input type="text" placeholder="Search by document title">
		<div id="sorting__select_documenttype_filter_models" class="sorting__select">
			<select class="js-select" data-placeholder="all documents">
				<option value="all documents">all documents</option>
				<option value="cutaway">cutaway</option>
				<option value="installation layout">installation layout</option>
				<option value="manual">manual</option>
				<option value="material of construction">material of construction</option>
				<option value="assembly">assembly</option>
			</select>
		</div>
	</div>

	<table class="about-table__table single-filter--documentation">
		<thead>
		<tr style="background-color:#A2B900;">
			<th>File Download</th>
			<th>Document Title</th>
			<th>Document Type</th>
		</tr>
		</thead>
		<tbody>
		<?php foreach( $documentation_table_info as $arr):?>
			<tr>
				<?php foreach($arr as $info=>$value):?>
					<?php if( is_array($value) ):?>
						<td>
							<a class="doc-file-link" href="<?=$value["doc_1"]["url"];?>" target="_blank"><?=$value["doc_1"]["title"];?></a>
							<?=( !$value["doc_1"]["url"] || !$value["doc_2"]["url"] ) ? '' : '|'?>
							<a class="doc-file-link" href="<?=$value["doc_2"]["url"];?>" target="_blank"><?=$value["doc_2"]["title"];?></a>
						</td>
					<?php else:?>
						<td><?=$value;?></td>
					<?php endif;?>
				<?php endforeach;?>
			</tr>
		<?php endforeach;?>
		</tbody>
	</table>
</div>
<!--/__filter_documentation_tab-->
<?php endif;?>