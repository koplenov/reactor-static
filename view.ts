
namespace $.$$ {

	export class $koplenov_reactor extends $.$koplenov_reactor {
		@$mol_mem
		peoples(){
			return $mol_fetch.json("https://reactor.kinsle.ru/users") as any
		}

		@$mol_mem_key
		content(people: any) {
			if (this.Enabled_cache().checked())
				$mol_wire_solid()
			return JSON.stringify($mol_fetch.json(`https://reactor.kinsle.ru/users/${people.id}`), undefined, 2)
		}

		@$mol_mem
		peoples_view() {
			return this.peoples().map((people: any) => this.PeopleView(people))
		}

		@$mol_mem_key
		people_name(people: any){
			return people.username
		}
	}
}
