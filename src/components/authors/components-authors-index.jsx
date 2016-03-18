var React = require('react');
var API = require('../../_api')

var AuthorsIndexView = React.createClass({
		render: function() {

			var obj = {
				firstName: 'Rafael',
				lastName: 'Quijada',
				active: 'true',
				age: '26',
				name_id: 'rafael-quijada'
			}

			return (
				<div>
					<h1>Authors Index</h1>
					<hr/>
					<table className="table">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>username</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Billy Tomkins</td>
								<td>billy-tomkins</td>
							</tr>
						</tbody>
					</table>
				</div>
			);
		}
});

module.exports = AuthorsIndexView;
